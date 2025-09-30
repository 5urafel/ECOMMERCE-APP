import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are a team of passionate individuals committed to delivering the
            best e-commerce experience. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo, enim ad? Temporibus repellat corporis
            architecto dolor dolorem vitae sit officiis.
          </p>
          <p>
            Our platform offers a wide range of products at competitive prices,
            with a focus on quality and customer satisfaction. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Doloremque sequi quas,
            quia explicabo similique iure debitis maiores veniam aliquam
            doloribus!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to provide a seamless and enjoyable
            shopping experience for our customers. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores, expedita.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            {" "}
            We prioritize quality in every aspect of our business, from product
            selection to customer service. Our team is dedicated to ensuring
            that you receive the best possible experience.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            {" "}
            We prioritize quality in every aspect of our business, from product
            selection to customer service. Our team is dedicated to ensuring
            that you receive the best possible experience.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            {" "}
            We prioritize quality in every aspect of our business, from product
            selection to customer service. Our team is dedicated to ensuring
            that you receive the best possible experience.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
