import "./globals.css";


export const metadata = {
  title: "Kerim Tarik | Penetration Tester (OSCP, CPTS)",
  description: "Portfolio of Kerim Tarik, a penetration tester holding the OffSec OSCP and HTB CPTS certifications.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // Let content use the full screen on notched phones; safe-area insets are respected in the CSS.
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
