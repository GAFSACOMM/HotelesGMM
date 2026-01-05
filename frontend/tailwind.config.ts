import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // ESCANEA TODAS ESTAS RUTAS
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    // Agrega explícitamente app/pages si existe
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/dashboard/**/*.{js,ts,jsx,tsx,mdx}',
    './app/schemas/**/*.{js,ts,jsx,tsx,mdx}',
    './app/services/**/*.{js,ts,jsx,tsx,mdx}',
    './app/styles/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
