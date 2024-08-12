"use client";
import React, { useState, useEffect } from "react";
// Components
import Sidebar from "../components/principal/sidebar";
// Services
import { userGetMe } from "../services/authService";

const DashboardForm: React.FC = () => {
	const [error, setError] = useState("");
	const [token, setToken] = useState<string | null>(null);
	const [userData, setUserData] = useState<UserResponse[] | null>(null);

	useEffect(() => {
		const fetchTokenFromURL = () => {
			// Se obtiene el token de la url que envía el SSO como nombre de redirect.
			const urlParams = new URLSearchParams(window.location.search);
			const tokenFromURL = urlParams.get("redirect");
			// Si el token existe se guarda en localStorage y se elimina todo el
			// Params con el nombre de redirect para formar una nueva url.
			// Para reemplazar la página sin redireccionarla a esa nueva construida.
			if (tokenFromURL) {
				window.localStorage.setItem("token", tokenFromURL);
				urlParams.delete("redirect");
				const newUrl = `${window.location.pathname}${urlParams.toString()}`;
				window.history.replaceState({}, "", newUrl);
				setToken(tokenFromURL);
			}
		};
		fetchTokenFromURL();
	}, []);

	useEffect(() => {
		if (token) {
			const fetchUserData = async () => {
				try {
					const data = await userGetMe(token);
					setUserData(data);
				} catch (err) {
					console.error("Error fetching user data:", err);
					setError("Error al obtener los datos del usuario");
				}
			};

			fetchUserData();
		}
	}, [token]);

	useEffect(() => {
		if (userData && userData.length > 1) {
			console.log("<<<<<<<<<<35 userData updated:", userData[1].full_name);
		}
	}, [userData]);

	return (
		<div className="flex">
			{/* Sidebar */}
			<Sidebar />

			{/* Main content */}
			<div className="flex-1 pl-72 p-6">
				{error && <div className="text-red-500 mb-4">{error}</div>}
				{userData ? (
					<div>
						<h1 className="text-3xl font-bold mb-4">
							Bienvenido,{" "}
							{userData && userData.length > 1
								? userData[1].full_name
								: "Cargando..."}
						</h1>
						<div className="bg-white shadow-md rounded p-6">
							<h2 className="text-xl font-bold mb-2">
								Información del Usuario
							</h2>
							<p>
								<strong>Email:</strong>{" "}
								{userData && userData.length > 1
									? userData[1].email
									: "Cargando..."}
							</p>
						</div>
					</div>
				) : (
					<div className="text-gray-500">Cargando...</div>
				)}
			</div>
		</div>
	);
};

export default DashboardForm;
