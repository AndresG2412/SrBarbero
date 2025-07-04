import "./globals.css";
import { imperialScript } from './fonts'; // Importa tu fuente

export const metadata = {
    title: "Sr. Barbero",
    description: "App exclusiva de la barbería Sr. Barbero",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${imperialScript.variable}`}>
            <body>
                {children}
            </body>
        </html>
    );
}
