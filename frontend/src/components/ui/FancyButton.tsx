import React, { } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  effectColor?: string;
}

const FancyButton: React.FC<Props> = ({ children, className, effectColor }) => {
  return (
    <Button className={cn("rounded-sm max-[300px]:text-xs text-sm sm:text-[16px] px-8 py-5 relative group overflow-hidden hover:shadow-lg transition", className)}>
      <div className={cn(
        "absolute size-0 group-hover:size-40 transition-all duration-500 bg-black rounded-full",
        effectColor
      )}></div>
      {/* <div className="absolute inset-0. shadow-2xl border rounded-sm z-20"></div> */}
      <span className="relative z-10">{children}</span>
    </Button>
  );
};

export default FancyButton;
