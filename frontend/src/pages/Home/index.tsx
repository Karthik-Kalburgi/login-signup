import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/ui/Header";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {/* <Header /> */}

      <Footer />
    </div>
  );
};

export default Home;
