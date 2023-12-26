import React from "react";

function AboutUs() {
  return (
    <section>
      <div className="flex h-screen">
        <div className="relative w-1/2">
          <img
            src="https://thumbs.wbm.im/pw/medium/10110e1f289c3b8eed069a4426d8a315.avif"
            alt="Person"
            className="absolute inset-0 h-full w-full object-cover"
            width={605}
            height={700}
            style={{ aspectRatio: "605 / 700", objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8b0b0] via-transparent to-transparent" />
        </div>
        <div className="w-1/2 bg-[#5e5eaa] p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">About us</h2>
          <p className="mb-4">
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way.
          </p>
          <p className="mb-6">
            We’ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-[#5e5eaa]">
            More on Our History
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
