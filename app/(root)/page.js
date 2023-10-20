import "./page.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/containers/footer/Footer";
import Header from "@/containers/header/Header";
import Toplist from "@/containers/Toplist/Toplist";
 
export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Toplist />
      <Footer />
    </main>
  );
}
