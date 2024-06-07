"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export default function ThreeDCardDemo() {
  return (
    <div className="py-15" id="projects">
      <h1 className="heading sm:mb-10"> 
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-evenly p-4 gap-16 mt-10 sm:mt-15 mb-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[30rem] flex items-center justify-center sm:w-96 sm:h-[25rem] w-[80vw]"
            key={item.id}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative gap-x-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <a className="flex lg:text-xl md:text-xs text-sm text-purple"
                    href={item.link}>
                      Check Live Site
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
