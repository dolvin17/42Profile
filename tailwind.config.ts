import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
		'fondo-cabecera': "url('/tiamant.jpg')",
      },
	  
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
