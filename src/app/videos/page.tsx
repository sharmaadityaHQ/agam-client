// "use client";

// import { useState } from "react";
import Link from "next/link";
import PageContainer from "../../components/PageContainer";
import Image from "next/image";

interface Video {
  thumbnail: string;
  title: string;
  link: string;
}

const videos: Video[] = [
  {
    title: "The Silence That Remains",
    thumbnail: "/video_1.webp",
    link: "https://youtu.be/0ck1e1F8qU0",
  },
  {
    title: "Teaser - The Silence That Remains",
    thumbnail: "/video_2.webp",
    link: "https://youtu.be/474nEr0zblM",
  },
  {
    title: "A Prelude to 'Arrival of the Ethereal'",
    thumbnail: "/video_3.webp",
    link: "https://youtu.be/4hZMrzO2_XM",
  },
  {
    title: "Rebirth of Mystical Aabheri",
    thumbnail: "/video_4.webp",
    link: "https://youtu.be/3_SZMp6FCls",
  },
  {
    title: "Theeye",
    thumbnail: "/video_5.webp",
    link: "https://youtu.be/qpPj3a-7W3s",
  },
  {
    title: "Kaadhal Rojave",
    thumbnail: "/video_6.webp",
    link: "https://youtu.be/SAGtbF3hHWM",
  },
  {
    title: "Uyirum Neeye",
    thumbnail: "/video_7.webp",
    link: "https://youtu.be/y09WBbj5I4M",
  },
  {
    title: "Agam Live from the Lockdown!",
    thumbnail: "/video_8.webp",
    link: "https://youtu.be/yQhiiWMaWk0",
  },
  {
    title: "Thoomani Maadathu",
    thumbnail: "/video_9.webp",
    link: "https://youtu.be/7xWPmjDwq7M",
  },
  {
    title: "Rangapura Vihaara",
    thumbnail: "/video_10.webp",
    link: "https://youtu.be/oESni03J8h8",
  },
  {
    title: "Koothu Over Coffee",
    thumbnail: "/video_11.webp",
    link: "https://youtu.be/BMC5MU6exiw",
  },
  {
    title: "Singapore | The Dream Tour 2018",
    thumbnail: "/video_12.webp",
    link: "https://youtu.be/yFm2bgC194U",
  },
  {
    title: "The Celestial Nymph",
    thumbnail: "/video_13.webp",
    link: "https://youtu.be/NTaCZ3ytbn4",
  },
  {
    title: "BTS | A Dream To Remember",
    thumbnail: "/video_14.webp",
    link: "https://youtu.be/wq1vjmbcca8",
  },
  {
    title: "Mist of Capricorn",
    thumbnail: "/video_15.webp",
    link: "https://youtu.be/zkvNnRjIhPE",
  },

  {
    title: "Onwards and Upwards",
    thumbnail: "/video_16.webp",
    link: "https://youtu.be/DONOtUx2SVk",
  },
  {
    title: "Rangapura Vihaara unplugged",
    thumbnail: "/video_17.webp",
    link: "https://youtu.be/h2wEQ3dwG8E",
  },
  {
    title: "Over the horizon",
    thumbnail: "/video_18.webp",
    link: "https://youtu.be/G7iW2X9AVmQ",
  },
  {
    title: "A R Rahman speaks about Agam",
    thumbnail: "/video_19.webp",
    link: "https://youtu.be/fazmTGuo1_4",
  },
  {
    title: "Lakshiya Paadhai",
    thumbnail: "/video_20.webp",
    link: "https://youtu.be/AKocOmyM0NA",
  },
];

const Videos = () => {
  // const [activeFilter, setActiveFilter] = useState("all");

  // const filteredAlbums =
  //   activeFilter === "all"
  //     ? albums
  //     : albums.filter((album) => album.type === activeFilter);

  return (
    <PageContainer>
      <div className="my-[20vh]">
        <div className="flex flex-col items-center">
          <div className="w-[85%]">
            <p className="text-[30px] lg:text-[75px] text-center text-white font-bold leading-[120%] tracking-[3px]">
              VIDEOS
            </p>
            <p className="uppercase text-[16px] lg:text-[22px] text-center text-white font-normal leading-[137%] tracking-[3px] mt-[5px]">
              EXPLORE THE AGAM VIDEO LIBRARY!
            </p>
          </div>
        </div>

        {/* TODO: enable this section after asset availability */}
        {/* <div className="flex flex-wrap gap-[10px] mt-[60px] mb-[30px] mx-[30px] md:justify-center">
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
        </div> */}

        <div className="flex justify-center mt-[60px] lg:mt-[120px]">
          <div className="flex flex-wrap justify-center gap-[20px] w-full mx-[20px] lg:mx-[40px]">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative w-full h-[260px] md:h-[280px] md:w-[48%] lg:h-[220px] lg:w-[30%] xl:w-[23%] overflow-hidden cursor-pointer bg-[#313131]"
              >
                <Link href={video.link} key={index} target="_blank">
                  <Image
                    src={video.thumbnail}
                    alt="agam video library"
                    fill
                    className="object-cover transition-all duration-1000 opacity-65 hover:scale-110 hover:opacity-30"
                  />
                  <p className="absolute w-[85%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center text-[16px] uppercase font-bold leading-[19px] tracking-[3px]">
                    {video.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Videos;
