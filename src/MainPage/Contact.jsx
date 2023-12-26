import React from "react";

function Contact() {
  return (
    <section>
     <div className="relative bg-[url('https://thumbs.wbm.im/pw/medium/39662edc902146f44e4369b2339de063.avif')] bg-cover bg-center h-[258px]">
  <div className="absolute inset-0 bg-black opacity-50" />
  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white space-y-4">
    <h1 className="text-4xl font-bold">
      Free consultation with exceptional quality
    </h1>
    <p className="text-xl">Just one call away: +84 1102 2703</p>
  </div>
  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 absolute right-8 top-1/2 transform -translate-y-1/2 bg-white text-black">
    Get your consultation
  </button>
</div>

    </section>
  );
}

export default Contact;
