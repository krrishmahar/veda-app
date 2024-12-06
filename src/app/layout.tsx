import Banner from "@/app/components/global/Banner";
import Footer from "@/app/components/global/Footer";
import Navbar from "@/app/components/global/Navbar";
import StyledJsxRegistry from "./registry";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledJsxRegistry>
          <header>
            <Banner />
            <div className="relative flex justify-end items-center px-6 ">
              <Navbar />
            </div>
          </header>
          <main>
            {children}  {/* This is where the page-specific content goes */}
          </main>
          <Footer />
        </StyledJsxRegistry>
      </body>
    </html >
  );
}
