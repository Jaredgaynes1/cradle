import React from "react";
import { TalkToTheFounderButton } from "./ui/talk-to-the-founder-button";

export const CallToAction = () => {
  return (
    <section
      className="py-16 bg-gray-900 bg-white/10 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Streamline Your Operations?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          {
            "Schedule a 30-minute call to see how Cradle can work for your property."
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://cal.com/jared-gaynes-vjuiq7/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center"
          >
            <TalkToTheFounderButton className="w-full sm:w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
};
