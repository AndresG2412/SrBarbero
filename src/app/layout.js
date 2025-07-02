import "./globals.css";

export const metadata = {
    title: "Sr. Barbero",
    description: "App exclusiva de la barbería Sr. Barbero",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                {children}
            </body>
        </html>
    );
}
