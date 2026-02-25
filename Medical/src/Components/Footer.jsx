import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import lightlogo from "../assets/ourfriend-light.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white  mt-16">
      <div className="container mx-auto py-12 px-6 grid md:grid-cols-4 gap-6">
        <section>
          <img src={lightlogo} className="h-20 " alt="light logo" />
          <p className="text-sm leading-relaxed mb-5">
            Our Friend Hospital is a state of the art Medical Facility that
            believes in the power of diagnosis before treatment.{" "}
          </p>
          <div className="flex flex-wrap gap-3 text-white">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <span
                key={i}
                className="border rounded-full p-3 hover:bg-blue-500  transition cursor-pointer"
              >
                <Icon size={14} />
              </span>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-lg font-semibold mb-4"> Our Location</h4>
          <p className="mb-2">
            10 Adepitan St, Ojodu, Lagos 101232, Lagos, Nigeria
          </p>
          <p className="mb-2">info@ourfriendhospital.com</p>
          <p className="mb-2">+234 8023 311 868</p>
        </section>

        <section>
          <h4 className="text-lg font-semibold mb-4">About</h4>
          
        </section>
        <section>
          <img src={lightlogo} className="h-20 " alt="light logo" />
          <p className="text-sm leading-relaxed mb-5">
            Our Friend Hospital is a state of the art Medical Facility that
            believes in the power of diagnosis before treatment.{" "}
          </p>
          <div className="flex flex-wrap gap-3 text-white">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <span
                key={i}
                className="border rounded-full p-3 hover:bg-blue-500  transition cursor-pointer"
              >
                <Icon size={14} />
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="border-t py-5 px-6 flex justify-between items-center text-sm container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} our friend Hospital. All Rights
          Reserved
        </p>
        v
      </div>
      <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className='bg-gray-200 text-white rounded-full p-3 hover:bg-amber-600 hover:text-black transition'>
      <FaArrowUp/>
     </button>
    </footer>
  );
};

export default Footer;
