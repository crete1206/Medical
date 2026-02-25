import React from 'react'
import { FaHospitalAlt } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdChildCare } from "react-icons/md";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { TbDental } from "react-icons/tb";


import serv1 from '../assets/Service/gp-img.jpg'
import serv2 from '../assets/Service/optician-img.jpg'
import serv3 from '../assets/Service/child-care-img.jpg'
import serv4 from '../assets/Service/obstetrics-img.jpg'
import serv5 from '../assets/Service/emergency.jpg'
import serv6 from '../assets/Service/dental-img.jpg'


const services = [
    {
        id: 1,
        title: "General Consultation",
        description: "We offer professional medical consultations for all age groups. Our doctors carefully assess your symptoms, provide accurate diagnosis, and guide you with the right treatment plan.",
        icon: FaHospitalAlt,
        Image: serv1,
        link: "#"

    },
    {
        id: 2,
        title: "Eye Care",
        description: "Our eye care specialists provide vision testing, eye examinations, and treatment for common and complex eye conditions to help protect and improve your eyesight.",
        icon: FaEye,
        Image: serv2,
        link: "#"

    },
    {
        id: 3,
        title: "Child Care",
        description: "We deliver specialized pediatric care to ensure the healthy growth and development of your child in a safe and friendly environment.",
        icon: MdChildCare ,
        Image: serv3,
        link: "#"

    },
    {
        id: 4,
        title: "Obstetrics  & Gynecology",
        description: "Our maternity and women’s health services provide prenatal care, safe delivery support, and postnatal monitoring for both mother and baby.",
        icon: MdOutlinePregnantWoman,
        Image: serv4,
        link: "#"

    },
    {
        id: 5,
        title: "Emergency Care",
        description: "Our emergency department operates with speed and precision to handle urgent medical situations with immediate attention and professional care.",
        icon: FaAmbulance ,
        Image: serv5,
        link: "#"

    },
    {
        id: 6,
        title: "Dental Care",        
        description: "We provide comprehensive dental services including check-ups, cleaning, fillings, and oral health treatments to keep your smile healthy and bright.",
        icon: TbDental,
        Image: serv6,
        link: "#"

    },
]
const HomeService = () => {
  return (
    <div className='py-20 px-5 bg-gray-50'>
      <section className='flex flex-col justify-center items-center px-20 mb-10 py-10'>
        <h5 className='text-sm bg-blue-100 to blue-100 uppercase w-fit font-semibold px-5 py-3 '>OUR SERVICES</h5>
        <h2 className='text-3xl md:text-4xl font-bold mb-10'>Explore Our Main Medical Services</h2>
      </section>
      <section className='grid grid-cols-1 justify-between gap-5 md:grid-cols-2 lg:grid-cols-3'>
       {services.map((service, i) => {
        const Icon = service.icon
        return(
            <aside className='bg-white p-10 shadow-md transtion duration-500 group relative h-72 perspective-[1000px]' key={i}>
              <div
              className='absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition duration-500'
              
              style={{
    background: `linear-gradient(to bottom, rgba(0, 0, 225, 0.733),rgba(0, 0, 225, 0.678)),
    url(${service.Image}) center / cover no-repeat`
}}>



              </div>
           <div className='absolute z-10'>
              <div ><Icon className='text-5xl text-blue-500 group-hover:text-amber-300 transition duration-500 transform-style-preserve-3d group-hover:rotate-y-180'/></div>
              <h3 className='py-5 text-xl font-semibold mb-4 group-hover:text-white'>{service.title}</h3>
              <p className='text-gray-600 group-hover:text-white transition duration-300 '>{service.description}</p>
           </div>
          </aside>

        )
          
       })}
        
       
      
       
      </section>
    </div>
  )
}

export default HomeService