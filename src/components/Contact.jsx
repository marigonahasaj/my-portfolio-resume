import React, { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Reset message

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://getform.io/f/bkkydwpb", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Your message has been sent successfully!");
        e.target.reset();
      } else {
        setMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div
          name="contact"
          className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6">Submit the form below to get in touch with me</p>
          </div>

          <div className="flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full md:w-1/2"
            >
              <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  required
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button
                  type="submit"
                  disabled={loading}
                  className={`text-white bg-gradient-to-b from-orange-400 to-yellow-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md ${
                      loading ? "opacity-50 cursor-not-allowed" : "hover:scale-110 duration-300"
                  }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {message && (
                  <p className="text-center text-sm mt-2">
                    {message}
                  </p>
              )}
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
