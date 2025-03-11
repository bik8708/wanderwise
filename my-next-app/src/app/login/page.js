import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow flex items-center justify-center relative z-10">
        <h2>LOGIN</h2>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
