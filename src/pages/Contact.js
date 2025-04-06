import React from "react";

function Contact() {
  return (
    <div className="flex-col font-Ubuntu w-full bg-slate-900 min-h-screen">
      {/* Contact Title */}
      <div className="flex justify-center items-center">
        <p className="text-3xl font-medium text-white border-b-2 mt-20 border-red-500">
          CONTACT
        </p>
      </div>

      {/* Contact Form & Image */}
      <div className="flex flex-col lg:flex-row w-full h-auto justify-center items-center lg:items-start mt-10 lg:space-x-10 px-4 lg:px-0">
        {/* Form Section */}
        <div className="flex justify-center items-center w-full lg:w-1/2 mb-10 lg:mb-0">
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full p-3 text-orange-500 border border-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img className="h-64 lg:h-96" src={"logo.png"} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
