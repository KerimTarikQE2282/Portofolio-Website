import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "Kerim Tarik Portofolio ",
  description: "A portofolio describing Kerim tarik",
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
