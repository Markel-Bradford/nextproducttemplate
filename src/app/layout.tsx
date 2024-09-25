import Navbar from "@/Components/Navbar";
import "../styles/globals.css";
import Footer from "@/Components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome styles
import ScrollToTop from "@/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

config.autoAddCss = false; // Disable auto-adding FontAwesome CSS

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
        <ShoppingCartProvider>
          <Analytics />
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
