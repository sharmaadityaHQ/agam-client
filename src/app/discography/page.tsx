"use client";

import { useState } from "react";
import PageContainer from "../ui/PageContainer";
import Image from "next/image";

interface Album {
  image: string;
  type: string;
}

const albums: Album[] = [
  {
    type: "studio albums",
    image:
      "https://dreamtheater.net/wp-content/uploads/2024/10/DreamTheater_Parasomnia_Cover_Embargo_11102024.jpg",
  },
  {
    type: "studio albums",
    image:
      "https://dreamtheater.net/wp-content/uploads/2021/07/DT-TopWorld-Cover-HR-1-scaled.jpeg",
  },
  {
    type: "studio albums",
    image:
      "https://dreamtheater.net/wp-content/uploads/2024/10/dt-dm-scaled.jpg",
  },
  {
    type: "live albums",
    image:
      "https://dreamtheater.net/wp-content/uploads/2024/10/dt-dot-scaled.jpg",
  },
  {
    type: "live albums",
    image:
      "https://dreamtheater.net/wp-content/uploads/2016/01/dt-astonishing.jpg",
  },
  {
    type: "compilations",
    image: "https://dreamtheater.net/wp-content/uploads/2017/07/lunapark.jpg",
  },
  {
    type: "compilations",
    image:
      "https://dreamtheater.net/wp-content/uploads/2024/10/dt-selftitled.jpg",
  },
  {
    type: "ep's / mini albums",
    image:
      "https://dreamtheater.net/wp-content/uploads/2024/10/dreamtheater_adramaticturnofevent_alrn.jpg",
  },
  {
    type: "ep's / mini albums",
    image:
      "https://dreamtheater.net/wp-content/uploads/2024/10/dreamtheater_blackcloudssilverlin_aldp.jpg",
  },
];

const Discography = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredAlbums =
    activeFilter === "all"
      ? albums
      : albums.filter((album) => album.type === activeFilter);

  return (
    <PageContainer>
      <div className="my-[15vh]">
        <div className="flex flex-col items-center">
          <div className="w-[88%]">
            <p className="text-[30px] lg:text-[75px] text-center text-white font-bold leading-[120%] tracking-[3px]">
              DISCOGRAPHY
            </p>
            <p className="uppercase text-[16px] lg:text-[22px] text-center text-white font-normal leading-[137%] tracking-[3px]">
              DEEP DIVE INTO DREAM THEATER'S DISCOGRAPHY!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-[10px] mt-[50px] mb-[30px] mx-[30px] md:justify-center">
          {[
            "all",
            "studio albums",
            "live albums",
            "compilations",
            "ep's / mini albums",
          ].map((filter) => (
            <div
              key={filter}
              role="button"
              onClick={() => setActiveFilter(filter)}
              className={`text-[16px] leading-[162%] tracking-[2px] cursor-pointer px-[15px] py-[5px] ${
                activeFilter === filter ? "text-black bg-white" : "text-white"
              }`}
            >
              {filter.toUpperCase()}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-[60px]">
          <div className="flex flex-wrap justify-center gap-[20px] w-full mx-[20px] lg:mx-[40px]">
            {filteredAlbums.map((album, index) => (
              <div
                key={index}
                className="relative w-full h-[350px] md:h-[450px] md:w-[48%] xl:h-[550px] lg:w-[30%]"
              >
                <Image
                  src={album.image}
                  alt="album cover"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Discography;
