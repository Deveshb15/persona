"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { configs } from "@/utils/constants";

export default function Page() {
  const router = useRouter();

  const handleCardClick = (configId: string) => {
    router.push(`/chat/${configId}`);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl w-full">
        {configs.map((config, index) => (
          <div
            key={config.configId}
            className={`bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-102 cursor-pointer
              ${index === 2 ? "lg:col-span-2 lg:w-2/3 lg:mx-auto" : ""}`}
            onClick={() => handleCardClick(config.configId)}
          >
            <div className="flex items-center p-6">
              <div className="relative w-24 h-24 flex-shrink-0 mr-6">
                <Image
                  src={config.image}
                  alt={config.role}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{config.role}</h3>
                <p className="text-gray-600 text-sm">{config.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
