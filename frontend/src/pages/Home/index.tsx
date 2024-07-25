// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

const Home = () => {
  return (
    <div className="max-h-screen min-h-screen flex flex-col justify-between">
      <Navbar />
      {/* <Header /> */}
      
      <Main/>
      {/* <Footer /> */}
      <Footer/>
    </div>
  );
};

export default Home;
