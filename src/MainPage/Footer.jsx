import React from "react";

function Footer() {
  return (
    <section>
      <footer className="bg-[#e1d7d2]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-6">
          <div>
            <h5 className="font-bold uppercase mb-2.5">Address:</h5>
            <p className="mb-1">6391 Elgin St. Celina, Delaware 10299</p>
            <h5 className="font-bold uppercase mt-4 mb-2.5">Phone:</h5>
            <p className="mb-1">+84 1102 2703</p>
            <h5 className="font-bold uppercase mt-4 mb-2.5">Email:</h5>
            <p>MDPro1992@gmail.com</p>
          </div>
          <div>
            <h5 className="font-bold uppercase mb-2.5">Newsletter:</h5>
            <div className="flex mb-4">
              <input
                placeholder="Your email here"
                className="p-2 border-2 border-r-0 border-[#f3d1bf] flex-1"
                type="email"
              />
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#f3d1bf] text-white">
                Subscribe
              </button>
            </div>
            <h5 className="font-bold uppercase mb-2.5">Social:</h5>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#3b5998]"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#0077b5]"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#1da1f2]"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#2c5282] text-white text-center p-4 mt-8">
          <p>TheBox Company © 2022. All Rights Reserved</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
