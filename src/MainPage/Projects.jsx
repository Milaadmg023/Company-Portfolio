import React from "react";

function Projects() {
  return (
    <section>
      <div className="flex">
        <div className="w-1/4 p-8 bg-[#f8f1f1]">
          <h1 className="text-4xl font-bold mb-6">Projects</h1>
          <nav>
            <ul className="text-lg font-medium">
              <li className="mb-4 text-[#bd1e59]">All</li>
              <li className="mb-4">Commercial</li>
              <li className="mb-4">Residential</li>
              <li>Other</li>
            </ul>
          </nav>
        </div>
        <div className="w-3/4 p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4">
              <img
                src="https://thumbs.wbm.im/pw/medium/fce72940da75c87802a8b0d796202ba4.avif"
                alt="Wildstone Infra Hotel"
                className="w-full h-48 object-cover mb-4"
                width={200}
                height={200}
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
              <h2 className="text-lg font-semibold mb-2">
                Wildstone Infra Hotel
              </h2>
              <p className="text-sm mb-4">
                2715 Ash Dr. San Jose, South Dakota
              </p>
            </div>
            <div className="bg-white p-4">
              <img
                src="https://thumbs.wbm.im/pw/medium/3eee988484e3501b3178ddf76b858090.avif"
                alt="Wish Stone Building"
                className="w-full h-48 object-cover mb-4"
                width={200}
                height={200}
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
              <h2 className="text-lg font-semibold mb-2">
                Wish Stone Building
              </h2>
              <p className="text-sm mb-4">
                2972 Westheimer Rd. Santa Ana, Illinois
              </p>
            </div>
            <div className="bg-white p-4">
              <img
                src="https://thumbs.wbm.im/pw/medium/50759fc4df1f1cd19459529f5aa38af6.avif"
                alt="Mr. Parkinson’s House"
                className="w-full h-48 object-cover mb-4"
                width={200}
                height={200}
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
              <h2 className="text-lg font-semibold mb-2">
                Mr. Parkinson’s House
              </h2>
              <p className="text-sm mb-4">
                3517 W. Gray St. Utica, Pennsylvania
              </p>
            </div>
            <div className="bg-white p-4">
              <img
                src="https://thumbs.wbm.im/pw/medium/3ee80f289a1f1164b79f976b7048836f.avif"
                alt="Oregano Height"
                className="w-full h-48 object-cover mb-4"
                width={200}
                height={200}
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
              <h2 className="text-lg font-semibold mb-2">Oregano Height</h2>
              <p className="text-sm mb-4">2464 Royal Ln. Mesa, New Jersey</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-[#bd1e59]">
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
                className="w-5 h-5 mr-2"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              
              Back
            </button>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-[#bd1e59] rounded-full" />
              <div className="w-2 h-2 bg-gray-300 rounded-full" />
              <div className="w-2 h-2 bg-gray-300 rounded-full" />
            </div>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-[#bd1e59]">
              Next
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
                className="w-5 h-5 ml-2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
