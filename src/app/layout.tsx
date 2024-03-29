import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/home/navbar'
import Footer from "./components/home/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={""}>

      <body className={"mx-auto flex flex-col justify-start"}>
      <Navbar/>
      {children}
      <div className="w-full mt-16">
          <Footer/>
      </div>
      </body>
      </html>
  );
}
