import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.041439750505!2d3.332975899999999!3d6.641776399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91478e3cc0bf%3A0xfc22984a2b3d7c48!2sOur%20Friends%20Hospital!5e0!3m2!1sen!2sng!4v1771850544100!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="items-center bg-white text-center py-10 w-[80%] mx-auto ">
        <h2 className="text-4xl text-blue-900">CONTACT US</h2>
        <p className=" text-purple-800 m-5 text-2xl">
          Our Friend Hospital (Specialised Care Centre)
        </p>

        <p className="mb-5 font-light">
          At Our Friend Hospital, we are dedicated to providing quality,
          compassionate, and professional healthcare services to individuals and
          families. Whether you want to book an appointment, make an enquiry, or
          seek medical assistance, our friendly team is always ready to help
          you.
        </p>

        <p className="font-light">
          We believe in accessible healthcare, timely response, and
          patient-centered care for everyone who walks through our doors.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-20 px-20 bg-amber-200 w-full gap-5">
        <aside className="flex-1 md:text-xl md:flex-1/3">
          <div className="items-start">
            <h5 className="text-4xl font-semibold">General Information</h5>
            <div className="">
              <p>
                10 Adepitan St, Ojodu, <br />
                Lagos 101232, Nigeria
              </p>
              <p>Email: ourfriendhosp@gmail.com </p>
              <p>Phone: 08023311868</p>
            </div>
          </div>
          <div className="my-7">
            <h5 className="text-2xl font-semibold">Working Hours</h5>
            <span className="font-semibold text-blue-700">
              
              Monday – Wednesday:
            </span>
            9:00 AM – 7:00 PM <br />
            Thursday: 9:00 AM – 6:30 PM <br />
            Friday: 9:00 AM – 6:00 PM <br />
            Saturday: 9:00 AM – 4:00 PM <br />
            Sunday: Closed (Emergency Support Available)
          </div>
        </aside>
        <aside className="md:flex-2/3 flex-1">
          <form action="">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter your name*"
                className="border px-3 py-2 w-full"
              />
              <input
                className="border px-3 py-2 w-full"
                type="Email"
                name=""
                id=""
                placeholder="Enter Your Email*"
              />
            </div>
            <div className="flex gap-3 my-7">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Phone Number*"
                className="border px-3 py-2 w-full"
              />

              <select name="lang" id="lang" className="border px-3 py-2 w-full">
                <option value="have you visited us before">Have You Visited Us Before?</option>
                <option value="new patient" selected>
                  New Patient
                </option>
                <option value="returning patient">Returning Patient</option>
                <option value="other">Other</option>
              </select>
            </div>
            <input type="text" placeholder="Subject*" className="border px-3 py-2 w-full"/>
            <textarea name="" id="" cols="30" rows="7" className="border px-3 py-2 w-full my-7" placeholder="Your Message..."></textarea>
            <button className="border:2px solid rounded-2xl bg-blue-800 text-white py-5 px-5">Send Your Message</button>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
