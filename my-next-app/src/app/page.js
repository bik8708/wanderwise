import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/home.jpg')" }}
      ></div>
      <div>
        <Navbar />
      </div>
      <div className="flex-grow flex items-center justify-center relative z-10">
        <h2
          className="text-3xl font-bold text-center text-white p-4 rounded"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Create your perfect travel itinerary with Wanderwise, share with
          friends, and explore inspiring itineraries from other travelers!
        </h2>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
