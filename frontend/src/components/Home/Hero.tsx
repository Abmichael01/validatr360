import PaddedDiv from "@/layouts/PaddedDiv";
import React from "react";
import FancyButton from "../ui/FancyButton";
import { useThemeStore } from "@/stores/themeStore";


const Hero: React.FC = () => {
  const { theme } = useThemeStore()
  return (
    <div className="bg-gradient-to-b  from-primary/10 to-transparent py-10 ">
      <PaddedDiv className="flex flex-col gap-5 items-center">
        <p className="border px-10 py-1 rounded-full border-primary text-primary font-semibold text-sm">
          Conversion Intelligence System
        </p>
        <h1 className="font-semibold font-secondary max-[300px]:text-4xl text-5xl sm:text-6xl text-center">
          Filter Out <span className="text-primary font-secondary">Junks.</span> keep <br />{" "}
          The <span className="text-primary font-secondary">Best</span> Leads <br />
          Close <span className="text-primary font-secondary">More</span> Deals
        </h1>
        <div className="flex gap-5 items-center">
          <FancyButton className="rounded-full">Get Started</FancyButton>
          <FancyButton className="rounded-full bg-transparent border text-foreground hover:text-white hover:bg-transparent">
            Learn More
          </FancyButton>
        </div>
        <div className="border rounded-xl w-full lg:w-[80%] mt-10 shadow-2xl overflow-hidden">
          <div className="border-b py-3 flex justify-between px-4 bg-primary/70 rounded-t-xl">
            <div></div>
            <div className="flex gap-2 items-center">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="size-2 sm:size-4 rounded-full bg-background"></div>
              ))}
            </div>
          </div>
          <img src={ theme === "light" ? "/heroLight.png" : "/heroDark.png" } alt="Hero" className="w-full object-cover" aria-label="Hey u" />
        </div>
      </PaddedDiv>
    </div>
  );
};

export default Hero;
