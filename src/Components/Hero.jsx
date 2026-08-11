import { Link } from "react-router-dom";
import Icons from "../assets/Icons.png";
import HeroImage from "../assets/Image.png";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden p-[30px]">
      <div className="flex">

        <div className="grid">

          <h1 className="font-Inter font-bold text-[54px] leading-[1.1]">
            AI-Powered Financial Management for Foreign Student.
          </h1>

          <p className="font-inter tracking-[-0.01em] w-[582.8125px] h-[120px] leading-[1.25] text-[#404A59] text-[24px]">
            EduFinance AI uses AI to provide students with personalized
            budgeting advice, real-time expense tracking, and financial
            tips. Take control of your finances and secure a prosperous
            future today.
          </p>

          <div className="flex translate-y-[15px]">
            <Link to="/register">
              <button className="flex justify-center font-Inter bg-[#03C987] w-[244px] text-white items-center h-[56px] rounded-full mt-[50px] mr-[64px] mb-[50px] leading-[1.25] gap-[8px] text-[16px] border">
                Get Started
                <img src={Icons} alt="Arrow" />
              </button>
            </Link>

            <Link to="/login">
              <button className="text-[#0B0C0F] rounded-full mt-[50px] -translate-x-12 mr-[64px] mb-[21px] border border-[#8896AA] bg-[#8896AA] w-[170px] h-[56px]">
                Login
              </button>
            </Link>
          </div>

        </div>

        <img
          src={HeroImage}
          alt="EduFinance"
          className="-translate-y-[100px] h-[580px] -translate-x-[10px]"
        />

      </div>
    </div>
  );
};

export default Hero;