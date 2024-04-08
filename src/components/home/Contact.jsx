import React from "react";

function Contact() {
  return (
    <section>
      <div className="flex flex-col p-2 gap-4 lg:flex-row bg-[url('https://thumbs.wbm.im/pw/medium/39662edc902146f44e4369b2339de063.avif')] bg-cover bg-center h-[258px]">
        <div className="text-white">
          <h1 className="text-4xl font-bold">
            Free consultation with exceptional quality
          </h1>
          <p className="text-xl">Just one call away: +84 1102 2703</p>
        </div>
        <button className="items-center w-1/2 justify-center rounded-md text-sm font-medium hover:bg-primary-900 h-10 px-4 py-2 bg-white text-black">
          Get your consultation
        </button>
      </div>
    </section>
  );
}

export default Contact;
