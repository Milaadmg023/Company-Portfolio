import React from "react";

function Massege() {
  return (
    <section>
      <div className="bg-[#f8f1f1] min-h-screen flex justify-center items-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-center mb-4">
            What can us do for you?
          </h1>
          <p className="text-center text-lg mb-8">
            We are ready to work on a project of any complexity, whether it's
            commercial or residential.
          </p>
          <form className="grid grid-cols-2 gap-6">
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <label htmlFor="name" className="font-semibold">
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                placeholder="Name"
                className="mt-1 p-2 border rounded"
                required=""
                type="text"
              />
            </div>
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <label htmlFor="email" className="font-semibold">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                placeholder="Email"
                className="mt-1 p-2 border rounded"
                required=""
                type="email"
              />
            </div>
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <label htmlFor="reason" className="font-semibold">
                Reason for Contacting<span className="text-red-500">*</span>
              </label>
              <input
                id="reason"
                placeholder="Reason for Contacting"
                className="mt-1 p-2 border rounded"
                required=""
                type="text"
              />
            </div>
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <label htmlFor="phone" className="font-semibold">
                Phone
              </label>
              <input
                id="phone"
                placeholder="Phone"
                className="mt-1 p-2 border rounded"
                type="tel"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="mt-1 p-2 border rounded h-32"
                defaultValue={""}
              />
              <p className="text-start text-sm mt-4">
                * indicates a required field
              </p>
            </div>
            <div className="flex justify-center col-span-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Massege;
