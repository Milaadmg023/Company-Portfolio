import React from "react";

function Services() {
  return (
    <section>
      <div className="bg-[#fde8e9] p-8">
        <h2 className="text-center text-3xl font-bold mb-10">Services</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
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
              className="h-12 w-12 mx-auto mb-4"
            >
              <rect x={2} y={6} width={20} height={8} rx={1} />
              <path d="M17 14v7" />
              <path d="M7 14v7" />
              <path d="M17 3v3" />
              <path d="M7 3v3" />
              <path d="M10 14 2.3 6.3" />
              <path d="m14 6 7.7 7.7" />
              <path d="m8 6 8 8" />
            </svg>
            <p>Construction</p>
          </div>
          <div className="bg-[#4c51bf] text-white p-4 shadow-md rounded-lg text-center">
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
              className="h-12 w-12 mx-auto mb-4"
            >
              <path d="M21 7v6h-6" />
              <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
            </svg>
            <p>Renovation</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
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
              className="h-12 w-12 mx-auto mb-4"
            >
              <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
              <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
              <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
            </svg>
            <p>Consultation</p>
          </div>
          <div className="bg-[#4c51bf] text-white p-4 shadow-md rounded-lg text-center">
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
              className="h-12 w-12 mx-auto mb-4"
            >
              <path d="M14 4c0-1.1.9-2 2-2" />
              <path d="M20 2c1.1 0 2 .9 2 2" />
              <path d="M22 8c0 1.1-.9 2-2 2" />
              <path d="M16 10c-1.1 0-2-.9-2-2" />
              <path d="m3 7 3 3 3-3" />
              <path d="M6 10V5c0-1.7 1.3-3 3-3h1" />
              <rect width={8} height={8} x={2} y={14} rx={2} />
            </svg>
            <p>Repair Services</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
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
              className="h-12 w-12 mx-auto mb-4"
            >
              <rect width={16} height={20} x={4} y={2} rx={2} ry={2} />
              <path d="M9 22v-4h6v4" />
              <path d="M8 6h.01" />
              <path d="M16 6h.01" />
              <path d="M12 6h.01" />
              <path d="M12 10h.01" />
              <path d="M12 14h.01" />
              <path d="M16 10h.01" />
              <path d="M16 14h.01" />
              <path d="M8 10h.01" />
              <path d="M8 14h.01" />
            </svg>
            <p>Architecture</p>
          </div>
          <div className="bg-[#4c51bf] text-white p-4 shadow-md rounded-lg text-center">
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
              className="h-12 w-12 mx-auto mb-4"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
            <p>Electric</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
