// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

const Home = () => {
  return (
    <div className="min-h-screen max-h-screen justify-between flex flex-col">
      <Navbar />
      {/* <Header /> */}
      <Main/>
      {/* <Footer /> */}
      <Footer/>
    </div>
  );
};

export default Home;
