'use client';
import axios from 'axios';
import qs from 'qs';


const API_BASE_URL_SSO = process.env.NEXT_PUBLIC_TEST_API_URL_SSO;
const CODE_SYSTEM = process.env.CODE_SYSTEM ?? 5;

if (!API_BASE_URL_SSO || !CODE_SYSTEM) {
  throw new Error("API URL or CODE_SYSTEM is not defined in the environment variables");
}
const API_URL_TO_SSO = `${API_BASE_URL_SSO}/login/access-token/${CODE_SYSTEM}`;


export const login = async (username: string, password: string) => {
  try {
    const payload = qs.stringify({ username, password });
    const response = await axios.post(API_URL_TO_SSO, payload, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    console.log("<<<<<<<<<<<20", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

export const userGetMe = async (token: string): Promise<UserGetMe> => {
  const BACKEND_SSO_GETME = `${API_BASE_URL_SSO}/login/get_user_by_token/`;
  try {
    const response = await axios.get<UserGetMe>(BACKEND_SSO_GETME, {
      params: { token },
      headers: { Authorization: `Bearer ${token}`}
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}