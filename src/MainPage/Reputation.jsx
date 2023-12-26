import React from "react";

function Reputation() {
  return (
    <section>
      <div className="bg-[#fde8e8] p-8">
        <h2 className="text-center text-3xl font-bold mb-10">Our Reputation</h2>
        <div className="flex justify-center space-x-4">
          <div
            className="rounded-lg border text-card-foreground w-[350px] bg-white p-6 shadow-md"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
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
                className="text-[#f97316] text-3xl mb-4"
              >
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
              </svg>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Best Services
              </h3>
            </div>
            <div className="p-6">
              <p>
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg border text-card-foreground w-[350px] bg-white p-6 shadow-md"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
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
                className="text-[#f97316] text-3xl mb-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Best Teams
              </h3>
            </div>
            <div className="p-6">
              <p>Cursus semper tellus volutpat aliquet lacus.</p>
            </div>
          </div>
          <div
            className="rounded-lg border text-card-foreground w-[350px] bg-white p-6 shadow-md"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
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
                className="text-[#f97316] text-3xl mb-4"
              >
                <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                <line x1={3} x2={21} y1={9} y2={9} />
                <line x1={9} x2={9} y1={21} y2={9} />
              </svg>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Best Designs
              </h3>
            </div>
            <div className="p-6">
              <p>Ultricies at ipsum nunc, tristique nam lectus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reputation;
