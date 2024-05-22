import React, { useState } from "react";
import img from "../assets/images/contact-img.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/harshitamarwaha32@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img className="w-[550px] h-full" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Get In Touch</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex gap-4 py-2">
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="flex gap-4 py-4">
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                rows={40}
                cols={35}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
