import React from "react";
import { Link } from "react-router-dom";
import courseImage1 from "../assets/images/BBA.png";
import courseImage2 from "../assets/images/B.tech.jpg";
import courseImage3 from "../assets/images/Bca.jpg";
import testimonialImage1 from "../assets/images/testimonial.png";
import testimonialImage2 from "../assets/images/customer-review.png";
import testimonialImage3 from "../assets/images/customer-satisfaction.png";
import testimonialImage4 from "../assets/images/rating.png";
import predictiveImages from "../assets/images/predictive-chart.png"
import psychometrictest from "../assets/images/critical-thinking.png"



const Homepage = () => {
  return (
    <>
      <div className="w-full">
      <style>
        {`
        @keyframes customAni {
        0% {
	      animation-timing-function: ease-in;
	      opacity: 1;
	         transform: translateY(-45px);
         }

         24% {
	        opacity: 1;
          }

            40% {
	       animation-timing-function: ease-in;
	     transform: translateY(-24px);
         }

            65% {
	      animation-timing-function: ease-in;
	       transform: translateY(-12px);
         }

      82% {
	      animation-timing-function: ease-in;
	    transform: translateY(-6px);
       }

  93% {
	animation-timing-function: ease-in;
	transform: translateY(-4px);
  }

      25%,
     55%,
     75%,
     87% {
	    animation-timing-function: ease-out;
	   transform: translateY(0px);
     }

     100% {
     	animation-timing-function: ease-out;
	   opacity: 1;
	   transform: translateY(0px);
     }
   }


          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
        }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }

          .animate-fadeInDown {
            animation: fadeInDown 1s ease-out;
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out;
          }

          .delay-100 {
            animation-delay: 0.1s;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          .animate-customAni{
         animation: customAni 2s ease-in 0s 1 normal none;
         }
         .delay-200{
         animation-delay:0.2s;
         }
        `}
      </style>
        
        <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4 animate-fadeInDown ">Welcome to Learning HubSpot</h1>
          <p className="text-2xl mb-8 animate-fadeInDown ">Your gateway to learning and growth</p>
          <Link
            to="/courses"
            className="bg-white text-green-600 py-3 px-8 rounded-full font-semibold hover:bg-green-200 transition duration-300 animate-fadeInUp"
          >
            Explore Courses
          </Link>
        </section>

        {/* Courses Section */}
        <section className="py-20 px-10 bg-white">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fadeInUp">
            Popular Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {[courseImage1, courseImage2, courseImage3].map((course) => (
              <div
                className="bg-white shadow-2xl rounded-2xl border-zinc-950 overflow-hidden transform hover:scale-105 flex items-center justify-center flex-col animate-fadeInDown transition duration-300  cursor-pointer"
                >
                <img
                  src={course}
                  alt={`Course`}
                  className="w-[40%] h-[70%] p-7 object-cover"
                />
                <div className="p-4 text-center"s>
                  <h3 className="text-2xl font-bold mb-2 animate-fadeInDown">
                  Bachelor of Business Administration 
                  </h3>
                  <p className="text-gray-600 mb-4 animate-fadeInDown">
                  An undergraduate course in business administration and management. 
                  </p>
                  <Link
                    to={`/course-details/`}
                    className="text-green-600 font-semibold hover:underline animate-fadeInDown"
                  >
                    Learn More
                  </Link>
                  <linK
                      >
                    Learn More
                  </linK>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Psychometric Assessment Section */}
        <section className="bg-gradient-to-tl from-slate-900 via-slate-400 to-slate-600 text-white py-20 px-10 mt-12 mb-12 text-center rounded-xl mx-4 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4 ">Psychometric Assessment</h2>
          <p className="text-xl mb-8">Sign up and start your free assessment</p>
          <Link
            to="/signup"
            className="bg-white text-pink-700 py-3 px-8 rounded-full font-semibold hover:bg-pink-200  transition duration-300 animate-customAni "
          >
            Get Started
          </Link>
        </section>

        {/* Test & Assessment Section */}
        <section className="py-20 px-10 bg-gray-100">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fadeInUp">
            Test & Assessment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[ psychometrictest, predictiveImages].map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col justify-center items-center animate-fadeInUp  cursor-pointer"
              >
                <img
                  src={course}
                  alt={`Assessment ${index + 1}`}
                  className="w-[40%] h-[80%] p-10 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    {index === 0
                      ? "Psychometric Assessment"
                      : "NEET Predictor Tool"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Description for{" "}
                    {index === 0
                      ? "Psychometric Assessment"
                      : "NEET Predictor Tool"}
                  </p>
                  <Link
                    to={`/course-details/${index + 1}`}
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Start Test
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-20 px-10 text-center rounded-xl mx-4 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4 animate-fadeInUp">Join Us Today</h2>
          <p className="text-xl mb-8 animate-fadeInUp">
            Sign up and start your learning journey with us.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-200 transition duration-300"
          >
            Get Started
          </Link>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-10 bg-gray-100 text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-12 animate-fadeInUp">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: testimonialImage1,
                text: "MBBSWALA helped me navigate the complexities of medical school admissions with ease. I highly recommend their services!",
                name: "Student A",
              },
              {
                image: testimonialImage2,
                text: "Their psychometric assessment was spot on and really helped me understand my strengths.",
                name: "Student B",
              },
              {
                image: testimonialImage3,
                text: "The NEET predictor tool gave me a realistic estimate and helped me plan my college applications effectively.",
                name: "Student C",
              },
              {
                image: testimonialImage4,
                text: "Fantastic service and very supportive staff. Highly recommend MBBSWALA.",
                name: "Student D",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
              >
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-[50%] h-[44%] border-[5px] border-gradient-to-r from-blue-400 to-teal-500 rounded-full object-cover mx-auto mb-4"
                />
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-20 px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl mb-4">
            For any queries or support, reach out to us at:
          </p>
          <p className="text-xl mb-8">
            Email: support@mbbswala.com | Phone: +1 234 567 890
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-200 transition duration-300"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </>
  );
};

export default Homepage;
