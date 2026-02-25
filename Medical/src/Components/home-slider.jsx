"use client";

import { Carousel } from "flowbite-react";
import greatCare from '../assets/best-health-care.jpg'

export function Homeslider() {
  return (
    <div className="h-screen">
      <Carousel slideInterval={5000} className="[&>div]:overflow-hidden">
        <div
          className="flex h-full items-center  bg-cover justify-center relative"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=1024x1024&w=is&k=20&c=S0QE85ASQSpAKKrKhsC1NllJuJSpaDsv6rrHK0w_a40=')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 top-1/3 w-1/3 h-fit left-[60%] text-white max-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 px-2 py-4">
              Our Friend <br /> Hospital
            </h1>
            <p className="mb-6 text-lg py-2 px-4">
              Providing Passionaste medical care with world renouned facilities
            </p>
          </div>
        </div>

        <div
          className="flex h-full items-center  bg-cover justify-center relative"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=1024x1024&w=is&k=20&c=S0QE85ASQSpAKKrKhsC1NllJuJSpaDsv6rrHK0w_a40=')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 top-1/2 w-1/3 h-fit left-5 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
              Our Friend <br /> Hospital
            </h1>
            <p className="mb-6 text-lg">
              Providing Passionaste medical care with world renouned facilities
            </p>
          </div>
        </div>

        <div
          className="flex h-full items-center bg-cover justify-center relative"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/african-american-man-woman-talking-girl-hospital-ward-about-healing-treatment-diagnosis-doctors-examining-sick-young-patient-with-cervical-neck-collar-sitting-bed_482257-16515.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 top-1/2 w-1/3 h-fit left-5 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
              Our Friend <br /> Hospital
            </h1>
            <p className="mb-6 text-lg">
              Providing Passionaste medical care with world renouned facilities
            </p>
          </div>
        </div>
      </Carousel>
      
    </div>
  );
}
export default Homeslider;
