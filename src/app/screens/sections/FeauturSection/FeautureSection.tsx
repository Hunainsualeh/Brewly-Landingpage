"use client";

import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

const featureCards = [
  {
    icon: "https://c.animaapp.com/min8qdk7rRnsOg/img/container-1.svg",
    title: "Reduce Waste",
    description:
      "AI-powered demand prediction helps you order exactly what you need.",
  },
  {
    icon: "https://c.animaapp.com/min8qdk7rRnsOg/img/container-2.svg",
    title: "Increase Sales",
    description:
      "Smart bundle suggestions drive higher average order values automatically.",
  },
  {
    icon: "https://c.animaapp.com/min8qdk7rRnsOg/img/container.svg",
    title: "Serve Faster",
    description:
      "Streamlined operations mean shorter wait times and happier customers.",
  },
];

const cafeTypes = [
  "Coffee Shops",
  "Café Chains",
  "Kiosks",
  "Pizzeria",
  "Bakeries",
  "Grab & Go",
];

const businessTags = [
  ["Single Café", "Multi-Branch", "Counter Service"],
  ["Hybrid Businesses", "Kiosk", "New Businesses"],
];

const formFields = [
  "First and last name*",
  "Email address*",
  "Phone number*",
  "Restaurant name*",
  "Primary restaurant location zip code*",
];

export const FeaturesSection = () => {
  const [selectedCafeType, setSelectedCafeType] = React.useState(0);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 sm:gap-16 md:gap-24 lg:gap-[120px] mt-4 sm:mt-6 md:mt-8 overflow-hidden">
      {/* Hero / Top Section */}
      <div className="relative w-full bg-white rounded-[0px_0px_24px_24px] sm:rounded-[0px_0px_36px_36px] md:rounded-[0px_0px_48px_48px]">
        {/* Left Green Squiggle - Responsive sizes */}
        <div className="absolute top-[120px] md:top-[140px] left-0 h-[400px] w-[120px] md:h-[550px] md:w-[180px] lg:h-[650px] lg:w-[260px] xl:h-[750px] xl:w-[320px] z-0 pointer-events-none hidden md:block transform -rotate-12 origin-top-left">
          <img
            className="w-full h-full object-contain object-left"
            alt="Decoration"
            src="https://c.animaapp.com/min8qdk7rRnsOg/img/vector-14.svg"
          />
        </div>

        <div className="max-w-[1040px] mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 relative z-10">
          <div className="flex flex-col items-center gap-6 animate-fade-in">
            {/* Headline */}
            <h1 className="w-full max-w-[800px] [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px] text-center leading-[1.1] text-[#212121]">
              Brewly helps cafés <br />
              <span className="relative inline-block mt-2">
                sell{" "}
                <span className="relative z-10">
                  smarter
                  {/* Green Circle Loop */}
                  <img
                    className="absolute -left-2 sm:-left-4 -top-1 sm:-top-2 w-[115%] h-[130%] min-w-[180px] sm:min-w-[280px] max-w-none -z-10 object-contain pointer-events-none"
                    alt="Highlight"
                    src="https://c.animaapp.com/min8qdk7rRnsOg/img/vector-15.svg"
                  />
                </span>
                .
              </span>
            </h1>

            {/* Subhead */}
            <p className="w-full max-w-[685px] [font-family:'Inter',Helvetica] font-normal text-[#787777] text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-6 sm:leading-7 md:leading-9 mt-2 px-4 sm:px-0">
              AI-powered upsells and bundles built for modern cafés no POS
              replacement needed.
            </p>

            {/* Input Form & Arrow Container */}
            <div className="relative w-full max-w-[540px] mt-4 z-20">
              {/* Form */}
              <div className="flex flex-col sm:flex-row items-center bg-[#f8f6f3] rounded-xl border border-solid border-[#eeeeee] overflow-hidden p-1 shadow-[0px_2px_6px_2px_#d6d6d626] gap-2 sm:gap-0">
                <Input
                  placeholder="Email address*"
                  className="flex-1 w-full sm:w-auto h-12 sm:h-14 bg-transparent border-0 shadow-none [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#787777] text-sm sm:text-base focus-visible:ring-0 pl-4"
                />
                <Button className="h-[45px] sm:h-[50px] px-6 sm:px-8 w-full sm:w-auto bg-[#1a5d4a] hover:bg-[#1a5d4a]/90 rounded-[10px] [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-white text-sm sm:text-base whitespace-nowrap">
                  Join Waitlist
                </Button>
              </div>

              {/* Waiting List Text */}
              <div className="text-center mt-2 sm:mt-3 [font-family:'Inter',Helvetica] text-[#212121] text-xs sm:text-sm md:text-base font-medium px-2">
                Join <span className="text-[#00674e] font-bold">2000</span>{" "}
                Other on the waiting list
              </div>

              {/* Green Arrow Decoration - Fixed Alignment */}
              <div className="absolute top-[20px] -right-[150px] hidden md:block w-[140px] pointer-events-none">
                <img
                  className="w-full h-auto transform rotate-6"
                  alt="Arrow"
                  src="https://c.animaapp.com/min8qdk7rRnsOg/img/vector-17.svg"
                />
              </div>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="mt-8 sm:mt-12 md:mt-16 animate-fade-in opacity-0 [--animation-delay:200ms] fill-mode-forwards relative z-10 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1100px] mx-auto">
            <div className="rounded-2xl shadow-2xl border border-gray-100 bg-white overflow-hidden">
              <img
                className="w-full h-auto"
                alt="Dashboard preview"
                src="https://c.animaapp.com/min8qdk7rRnsOg/img/image-3.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="flex w-full px-4 sm:px-6 items-start justify-center gap-4 sm:gap-6 flex-wrap animate-fade-in opacity-0 [--animation-delay:400ms] fill-mode-forwards">
        {featureCards.map((feature, index) => (
          <Card
            key={index}
            className="flex-1 min-w-full sm:min-w-[300px] bg-[#f8f6f3] border-0 rounded-2xl h-full min-h-[340px]"
          >
            <CardContent className="pt-10 pb-10 px-8 flex flex-col h-full">
              <img
                className="w-14 h-14 mb-8"
                alt={feature.title}
                src={feature.icon}
              />
              <h3 className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#212121] text-2xl tracking-[0.07px] leading-8 mb-3">
                {feature.title}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#787777] text-lg tracking-[-0.44px] leading-[29.2px]">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cafe Types Section */}
      <div className="flex w-full max-w-[1176px] px-4 sm:px-6 items-stretch justify-center gap-4 sm:gap-6 flex-wrap lg:flex-nowrap">
        <Card className="w-full lg:w-[360px] bg-[linear-gradient(0deg,rgba(246,241,238,1)_0%,rgba(246,241,238,1)_50%,rgba(249,249,249,1)_100%)] border-0 rounded-xl">
          <CardContent className="p-0">
            <div className="p-2.5 bg-[#f6f1ee] rounded-xl">
              <Button className="w-full h-11 bg-[#212121] hover:bg-[#212121]/90 rounded-[60px] [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-white text-base">
                Café
              </Button>
            </div>

            <div className="flex flex-col gap-6 mt-6 pb-6">
              {cafeTypes.map((type, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCafeType(index)}
                  className={`flex flex-col px-8 transition-all cursor-pointer hover:opacity-80 ${
                    index === selectedCafeType
                      ? "border-l-2 border-[#1a5d4a]"
                      : ""
                  }`}
                >
                  <div
                    className={`[font-family:'Source_Sans_Pro',Helvetica] font-normal text-lg sm:text-xl md:text-[22px] lg:text-[26px] tracking-[0] leading-6 sm:leading-7 md:leading-8 ${
                      index === selectedCafeType
                        ? "text-[#1a5d4a]"
                        : "text-[#787777]"
                    }`}
                  >
                    {type}
                  </div>
                </button>
              ))}
              <div className="h-8" />
            </div>
          </CardContent>
        </Card>

        <img
          className="w-72 h-auto hidden lg:block self-center"
          alt="Container"
          src="https://c.animaapp.com/min8qdk7rRnsOg/img/container-3.svg"
        />

        <div className="w-full lg:w-[456px] bg-neutral-50 rounded-xl overflow-hidden border border-solid border-[#eeeeeeee]">
          <img
            className="w-full h-auto object-cover p-[9px_27px]"
            alt="Phone mockup"
            src="https://c.animaapp.com/min8qdk7rRnsOg/img/image-1.png"
          />
        </div>
      </div>

      {/* One System Section */}

      <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-24 md:py-36 rounded-[24px] sm:rounded-[48px] relative bg-[linear-gradient(0deg,rgba(84,71,59,0.4)_0%,rgba(84,71,59,0.4)_100%),url(https://c.animaapp.com/min8qdk7rRnsOg/img/business-component-broll-webm.png)] bg-cover bg-[center_top_40%]">
        <div className="absolute w-full h-full top-0 left-0 rounded-3xl" />

        <div className="flex flex-col items-center gap-6 sm:gap-10 relative z-10 max-w-[936px]">
          <div className="flex flex-col max-w-[744px] items-center px-4 sm:px-0">
            <h2 className="[font-family:'Source_Sans_Pro',Helvetica] font-bold text-white text-[28px] sm:text-[36px] md:text-[42px] text-center tracking-[0] leading-[1.2] md:leading-[48px] mb-3 sm:mb-4">
              One system that adapts to how your café works
            </h2>
            <p className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-white text-[18px] sm:text-[22px] md:text-[26px] text-center tracking-[0] leading-6 sm:leading-8">
              From boutique cafés to multi-branch chains, Brewly fits your
              workflow.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-6 w-full max-w-[554px] px-4 sm:px-0">
            {businessTags.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-3 md:gap-6">
                {row.map((tag, tagIndex) => (
                  <Button
                    key={tagIndex}
                    variant="ghost"
                    className="h-auto px-4 sm:px-6 py-3 sm:py-4 bg-[#ffffff66] hover:bg-[#ffffff80] rounded-[60px] backdrop-blur-[15px] [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-white text-sm sm:text-base whitespace-nowrap transition-colors"
                  >
                    {tag}
                    <img
                      className="ml-1 sm:ml-2 w-3 sm:w-4"
                      alt="Chevron"
                      src="https://c.animaapp.com/min8qdk7rRnsOg/img/img---white-cheveron-right-margin.svg"
                    />
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intelligence Section */}
      <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-[132px] bg-white">
        <div className="flex flex-col max-w-[1176px] w-full gap-6 px-4 sm:px-6 pb-9">
          <div className="flex flex-col items-center gap-4">
            <h2 className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#212121] text-[28px] sm:text-[36px] md:text-[42px] text-center tracking-[0] leading-[1.2] sm:leading-[48px]">
              Intelligence built in
            </h2>
            <p className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#787777] text-[16px] sm:text-[18px] md:text-[22px] text-center tracking-[0] leading-6">
              AI that boosts your sales without extra effort
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 pt-4">
            <img
              className="w-full lg:w-[554.5px] h-auto rounded-3xl object-cover"
              alt="AI Analysis"
              src="https://c.animaapp.com/min8qdk7rRnsOg/img/image-4.png"
            />

            <div className="flex flex-col w-full lg:w-[552px] lg:pl-6">
              <div className="hidden lg:block h-[104px]" />
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#212121] text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-[1.5] sm:leading-[34px]">
                Brewly analyzes your last 90 days of data, weather, events,
                holidays, and customer habits&nbsp;&nbsp;then creates bundles
                customers love.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="w-full bg-[#0b5f47] rounded-[24px] sm:rounded-[48px] relative mx-4 sm:mx-6 mb-12">
        <div className="flex flex-col lg:flex-row max-w-[1176px] mx-auto items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-[132px] py-12 sm:py-16 md:py-[72px] relative z-10">
          <div className="flex-1 text-left w-full">
            <h2 className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-white text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] tracking-[-0.53px] leading-tight mb-4 sm:mb-6">
              Let's show you Brewly in action
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffcc] text-base sm:text-lg md:text-xl tracking-[-0.45px] leading-6 sm:leading-7">
              See how Brewly can transform your café operations in just 20
              minutes.
            </p>
          </div>

          <Card className="flex flex-col items-start w-full sm:w-[544px] h-auto sm:h-[576px] border-0 rounded-[24px] bg-white flex-none order-0 self-stretch">
            <CardContent className="flex flex-col items-start p-6 sm:p-8 gap-4 sm:gap-6 bg-white rounded-[24px] w-full h-full">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#212121] text-xl sm:text-2xl md:text-[28px] tracking-[0] leading-7 sm:leading-10">
                Let's schedule your free demo
              </h3>

              <div className="flex flex-col gap-3 sm:gap-4 w-full">
                {formFields.map((field, index) => (
                  <div key={index} className="relative">
                    <Input
                      placeholder={field}
                      className="h-[45px] sm:h-[50px] bg-white rounded-xl border border-solid border-[#eeeeee] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#787777] text-sm sm:text-base tracking-[0.20px]"
                    />
                  </div>
                ))}

                <div className="relative h-[45px] sm:h-[50px] bg-white rounded-xl border border-solid border-[#eeeeee] flex items-center px-3 sm:px-4 cursor-pointer">
                  <div className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#787777] text-sm sm:text-base tracking-[0] leading-6 flex-1">
                    Which best describes you?
                  </div>
                  <svg
                    className="w-4 h-4 text-[#787777]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <Button className="h-auto w-full px-6 sm:px-8 py-3 sm:py-[18px] bg-[#0b5f47] hover:bg-[#0b5f47]/90 rounded-xl [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-white text-sm sm:text-base">
                  Get a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="flex w-full self-center relative mt-12 sm:mt-24 md:mt-[180px] flex-col items-start gap-2 pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#f7f7f7]">
        {" "}
        <div className="flex flex-col items-start gap-6 sm:gap-8 relative self-stretch w-full flex-[0_0_auto]">
          {" "}
          <div className="flex flex-col items-start gap-10 sm:gap-20 relative self-stretch w-full flex-[0_0_auto]">
            {" "}
            <div className="flex flex-col items-start gap-4 sm:gap-6 relative self-stretch w-full flex-[0_0_auto]">
              {" "}
              <h1 className="relative max-w-[1144px] mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#212121] text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.72px] leading-[1.2] sm:leading-[86.4px] translate-y-[-1rem] animate-fade-in opacity-0">
                {" "}
                Brewing smarter experiences one café at a time.{" "}
              </h1>{" "}
            </div>{" "}
          </div>{" "}
          <div className="relative top-0 left-0 w-full max-w-[540px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            {" "}
            <div className="flex flex-col sm:flex-row w-full items-center gap-2">
              {" "}
              <div className="flex-1 relative w-full">
                {" "}
                <Input
                  type="email"
                  placeholder="Email address*"
                  className="w-full h-12 sm:h-16 pl-4 pr-4 bg-white rounded-xl border border-solid border-[#eeeeee] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#787777] text-sm sm:text-base"
                />{" "}
              </div>{" "}
              <Button className="h-12 px-6 sm:px-8 w-full sm:w-auto bg-[#1a5d4a] hover:bg-[#1a5d4a]/90 rounded-[10px] [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-white text-sm sm:text-base whitespace-nowrap transition-colors">
                {" "}
                Join Waitlist{" "}
              </Button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </section>
  );
};
