import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "SunCart",
  description: "Best online shopping experience with SunCart. Discover a wide range of products, unbeatable prices, and fast delivery. Shop now and enjoy the convenience of online shopping with SunCart.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <main className="flex-1">{children}</main>
       
      </body>
    </html>
  );
}
