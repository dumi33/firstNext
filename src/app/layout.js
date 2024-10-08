import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ShowItem from "@/components/ShowItem";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "loveuheaps",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <ShowItem/>
        {children}
      </body>
    </html>
  );
}
