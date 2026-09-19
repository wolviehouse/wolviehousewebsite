
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "WOLVIE — Different directions. One house.",
  description:
    "Wolvie House explores opportunities across trade, brands, community, consulting and ventures.",
  metadataBase: new URL("https://wolviehouse.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
