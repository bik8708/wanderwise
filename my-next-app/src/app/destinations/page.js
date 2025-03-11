import Navbar from "../../components/Navbar";

export default function Destinations() {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-8">Destinations</h1>
      <h2 className="text-white">Explore the following by region:</h2>
      <ul>
        <li>North America</li>
        <li>Europe</li>
        <li>Asia</li>
        <li>Africa</li>
        <li>Australia</li>
      </ul>
    </div>
  );
}
