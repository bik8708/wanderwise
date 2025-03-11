import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gray-200 py-2 relative z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-black text-lg font-bold">
          <Image src="/logo.png" alt="Wanderwise Logo" width={30} height={30} />
          <Link href="/" legacyBehavior>
            <a className="ml-2">Wanderwise</a>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/signup" legacyBehavior>
            <a className="text-gray-600 hover:text-black transition">Signup</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="text-gray-600 hover:text-black transition">Login</a>
          </Link>
          <Link href="/destinations" legacyBehavior>
            <a className="text-gray-600 hover:text-black transition">
              Destinations
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
