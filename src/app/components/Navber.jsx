import Link from "next/link";

export default function Navbar() {
  const navOptions = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">All Products</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100  sticky top-0 z-50 shadow-md" >
      {/* Container for Navbar */}
      <div className="container mx-auto px-4">
        <div className="navbar">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navOptions}
              </ul>
            </div>
            <h2 className="text-3xl text-white font-bold">Nexora Trend</h2>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-4 text-white px-1">{navOptions}</ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end gap-4">
            <button className="px-3 py-1 bg-blue-400 text-white rounded">
              Log in
            </button>
            <button className="px-3 py-1 bg-green-400 text-white rounded">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
