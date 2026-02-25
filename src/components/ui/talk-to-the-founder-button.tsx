import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import { CALL_TO_ACTION_TEXT } from "@/constants";

export const TalkToTheFounderButton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex justify-center text-center cursor-pointer", className)}>
      <HoverBorderGradient
        containerClassName="rounded-full cursor-pointer"
        as="button"
        className="bg-black text-white flex items-center space-x-2 px-8 py-4 text-lg"
      >
        <span>{CALL_TO_ACTION_TEXT}</span>
      </HoverBorderGradient>
    </div>
  );
};
