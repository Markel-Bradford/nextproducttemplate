import Navbar from "@/Components/Navbar";
import "../styles/globals.css";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Product Template",
  description: "An ecommerce product page template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body>  
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
