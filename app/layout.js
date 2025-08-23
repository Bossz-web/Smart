'use client';
import { IconName } from "react-icons/md";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import "./globals.css";

const metadata = {
  title: "Home page",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/Home"];
  const showNavbar = !pathname.startsWith("/Home");
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
