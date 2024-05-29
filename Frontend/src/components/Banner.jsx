import React from "react";
import banner from"../../public/BookStack.png";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-14">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-16 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welccome to our <br />
              <span className="text-pink-500"> E-learning Platform</span>
            </h1>
            <p className="text-xl">
              An e-learning platform is an online educational system that
              provides courses, resources, and interactive tools for learners to
              study at their own pace. It enables flexible, accessible learning
              experiences through multimedia content and virtual classrooms.
            </p>
          <div className="space-y-12">
            
          </div>
          </div>
          <Link to='/signup'>
            <button className="btn btn-secondary mt-6 w-40">
            Get Started
              
              </button>
              </Link>
        </div>

        {/* This is the right part */}
        <div className="order-1 md:order-2 w-full md:w-1/2">
            <img src={banner} className=" h-82 w-82" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
