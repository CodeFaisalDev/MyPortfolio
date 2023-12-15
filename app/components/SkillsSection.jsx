"use client";
import React, { useState, useEffect } from "react";

import {
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  BuildingStorefrontIcon,
  FingerPrintIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import {
  TypeSkillSectionName1,
  TypeSkillSectionName2,
  TypeSkillSectionName3,
  TypeSkillSectionName4,
  TypeSkillSectionName5,
  TypeSkillSectionName6,
  TypeSkillSectionDescription1,
  TypeSkillSectionDescription2,
  TypeSkillSectionDescription3,
  TypeSkillSectionDescription4,
  TypeSkillSectionDescription5,
  TypeSkillSectionDescription6,
} from "./skillsTypeAnimation";

const features = [
  {
    name: <TypeSkillSectionName1 />,
    description: <TypeSkillSectionDescription1 />,
    icon: CodeBracketSquareIcon,
  },
  {
    name: <TypeSkillSectionName2 />,
    description: <TypeSkillSectionDescription2 />,
    icon: ComputerDesktopIcon,
  },
  {
    name: <TypeSkillSectionName3 />,
    description: <TypeSkillSectionDescription3 />,
    icon: ShoppingBagIcon,
  },
  {
    name: <TypeSkillSectionName4 />,
    description: <TypeSkillSectionDescription4 />,
    icon: BuildingStorefrontIcon,
  },
  {
    name: <TypeSkillSectionName5 />,
    description: <TypeSkillSectionDescription5 />,
    icon: CircleStackIcon,
  },
  {
    name: <TypeSkillSectionName6 />,
    description: <TypeSkillSectionDescription6 />,
    icon: FingerPrintIcon,
  },
];

function SkillsSection() {
  const [selectedFeature, setSelectedFeature] = useState(features[0].name);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleDescription = (featureName) => {
    setSelectedFeature(selectedFeature === featureName ? null : featureName);
  };

  useEffect(() => {
    // Check if it's a mobile view
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMobileView(mediaQuery.matches);

    // Toggle the description for the first feature by default on mobile
    if (mediaQuery.matches) {
      toggleDescription(features[0].name);
    }
  }, [toggleDescription]);

  return (
    <section id="skills">
      <div className="bg-transparent pt-24 sm:pt-10">
        <div className="mx-auto max-w-full px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl sm:text-5xl font-semibold leading-7 mb-10 from-blue-500 via-purple-500 to-pink-500 text-center">
              My Self
            </h2>
            <p className="mt-2 text-1xl sm:text-3xl font-bold tracking-tight text-white-900 text-center">
              Full Stack Developer with 3+ years of experience
            </p>
          </div>
        </div>

        {/* ... other code ... */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className={`relative pl-16 ${isMobileView ? "" : "lg:block"}`}
              >
                <dt
                  className="text-base font-semibold leading-7 text-white-900 cursor-pointer flex items-center"
                  onClick={() => toggleDescription(feature.name)}
                >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                {(isMobileView || selectedFeature === feature.name) && (
                  <dd className="mt-2 text-base leading-7 text-white-600">
                    {feature.description}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
