import React from "react";

function Experience() {
  return (
    <section>
      <div className="bg-[#fde8e9] p-10">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
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
                className="text-[#4f46e5] mb-2 w-12 h-12"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
              <div className="text-6xl font-bold">123</div>
              <div className="text-xl">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center">
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
                className="text-[#4f46e5] mb-2 w-12 h-12"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                <path d="m18 15-2-2" />
                <path d="m15 18-2-2" />
              </svg>
              <div className="text-6xl font-bold">84</div>
              <div className="text-xl">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
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
                className="text-[#4f46e5] mb-2 w-12 h-12"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <div className="text-6xl font-bold">37</div>
              <div className="text-xl">Awards Won</div>
            </div>
            <div className="flex flex-col items-center">
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
                className="text-[#4f46e5] mb-2 w-12 h-12"
              >
                <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
                <line x1={16} x2={16} y1={2} y2={6} />
                <line x1={8} x2={8} y1={2} y2={6} />
                <line x1={3} x2={21} y1={10} y2={10} />
                <path d="m9 16 2 2 4-4" />
              </svg>
              <div className="text-6xl font-bold">30</div>
              <div className="text-xl">Years in Business</div>
            </div>
          </div>
          <div className="max-w-md bg-white p-8 shadow-lg rounded-lg">
            <div className="text-8xl font-bold text-[#4f46e5] leading-none">
              30 Years
            </div>
            <div className="text-5xl font-bold text-[#4f46e5] mb-4">
              Experience
            </div>
            <p className="text-lg mb-6">
              Our company has been the leading provider of construction services
              to clients throughout the USA since 1988.
            </p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#4f46e5] text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
