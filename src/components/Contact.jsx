import React from "react";
import { IoIosSend } from "react-icons/io";
import Swal from "sweetalert2";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5e956eb8-f640-43a6-b340-7af1099c1d25");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };
  return (
    <section className=" overflow-hidden w-full flex flex-col sm:flex-row sm:flex items-center justify-center">
      <div
        className="bg-hero-text w-[98%] flex sm:flex-row flex-col sm:gap-0 gap-10 items-center justify-between mx-6 mb-6  p-10     "
        id="container"
      >
        <div id="content">
          <h2 className="text-section-color  mr-6 text-3xl sm:text-5xl font-semibold">
            Let's discuss
            <h2>
              on something <span className=" text-pink-700 ">cool</span>{" "}
              together
            </h2>
          </h2>
          <div className="flex flex-col mt-3">
            <h2 className="text-section-color text-2xl sm:text-3xl font-semibold">
              Find me here...
            </h2>
            <iframe className=" w-[350px]   sm:w-[550px] sm:h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27550.181368325488!2d76.81808231223903!3d30.32898338598901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb60ff6b6ad15%3A0x4fd81c3913e46855!2sAmbala%20Sadar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1736979251250!5m2!1sen!2sin"
              width="550"
              height="350"
              style={{ border: 0, borderRadius: 25 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div
          id="svg-spliter"
          className=" hidden sm:block w-[30%] h-[50%] z-0 overflow-hidden p-9 absolute right-[400px] top-[2320px] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1353 1209"
            transform="rotate(-50)"
          >
            <path
              stroke="#291C3A"
              d="m.476 1208.1 184.997-181.3 157.208-66.116 58.067-131.016 247.116-101.733 79.238-205.198 252.931-88.684 201.377-128.574 69.32-209.494L1352.16.43"
            />
          </svg>
        </div>

        <div className=" relative" id="form">
          <form
            id="hire"
            onSubmit={onSubmit}
            className="flex flex-col gap-10 justify-center items-center"
            action=""
          >
            <div id="container">
              {/* <label>Full Name</label> */}
              <input
                name="name"
                className=" py-2 rounded-md px-5 w-[350px] sm:w-[400px]"
                required
                placeholder="Your name"
                type="text"
              />
            </div>
            <div id="container2">
              {/* <label>Email Address</label> */}
              <input
                className=" py-2 rounded-md px-5 w-[350px] sm:w-[400px]"
                required
                placeholder="Your Email"
                type="email"
                name="email"
              />
            </div>
            <div id="container3">
              {/* <label> Your Message</label> */}
              <textarea
                className=" py-5 rounded-md h-[200px] px-5 w-[350px] sm:w-[400px]"
                required
                placeholder="Enter your message..."
                name="message"
              ></textarea>
            </div>
            <button
              className="bg-font-color rounded-md text-white flex items-center mb-9 gap-3 py-2 px-8 sm:px-32"
              type="submit"
            >
              <IoIosSend />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
