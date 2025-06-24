"use client";

// import { useState } from "react";
import Image from "next/image";
import PageContainer from "../components/PageContainer";
import Button from "../components/Button";
import BandMemberCard from "../components/BandMemberCard";

interface TrackList {
  title: string;
  duration: string;
}

interface BandMember {
  name: string;
  role: string;
  image: string;
}

/*
const tracks: TrackList[] = [
  { title: "In the Arms of a Nightmare", duration: "09:22" },
  { title: "Alien Race", duration: "08:35" },
  { title: "Dead Solider", duration: "11:06" },
  { title: "Midnight Mission", duration: "07:58" },
];

const bandMembers: BandMember[] = [
  {
    name: "James Labrie",
    role: "Vocals",
    image: "/images/james-labrie.jpg",
  },
  {
    name: "John Myung",
    role: "Bass",
    image: "/images/john-myung.jpg",
  },
  {
    name: "John Petrucci",
    role: "Guitar",
    image: "/images/john-petrucci.jpg",
  },
  {
    name: "Jordan Rudess",
    role: "Keyboards",
    image: "/images/jordan-rudess.jpg",
  },
  {
    name: "Mike Portnoy",
    role: "Drums",
    image: "/images/mike-portnoy.jpg",
  },
];
*/

const Albulgetails = () => {
  //   const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PageContainer>
      <div className="my-[15vh]">
        {/* hero section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[40px] lg:gap-[100px] mx-[30px]">
          <div className="relative w-full max-w-[700px] lg:max-w-[500px] aspect-square">
            <Image
              fill
              alt="album cover"
              className="object-cover"
              src="https://dreamtheater.net/wp-content/uploads/2024/10/DreamTheater_Parasomnia_Cover_Embargo_11102024.jpg"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:max-w-[45%]">
            <p className="uppercase text-white text-[26px] md:text-[58px] text-center font-bold leading-[26px] md:leading-[58px] tracking-[4px] md:tracking-[8.5px]">
              PARASOMNIA
            </p>
            <p className="uppercase text-white text-[13px] md:text-[19.5px] text-center md:text-left font-normal leading-[18.2px] md:leading-[27.3px] tracking-[2px] md:tracking-[3px] mt-[5px] lg:mt-[15px]">
              Studio Album / Released 7 February 2025
            </p>
            <p className="text-white text-[15px] md:text-[19.5px] text-center lg:text-left font-normal leading-[22.5px] md:leading-[30px] mt-[30px]">
              Parasomnia is Dream Theater’s highly anticipated new album,
              marking their first full-length studio release with drummer Mike
              Portnoy since 2009. Packed with intricate compositions, powerful
              melodies, and the band’s signature virtuosity, the album explores
              themes of dreams, consciousness, and the blurred lines between
              reality and illusion.
            </p>
            <Button className="mt-[30px]">BUY/STREAM</Button>
          </div>
        </div>

        {/* band members section */}
        <div className="flex flex-wrap gap-[50px] lg:gap-[90px] xl:gap-[120px] justify-center bg-black mt-[100px] py-[65px]">
          <BandMemberCard
            image="https://dreamtheater.net/wp-content/uploads/2024/10/JLB-2024-square.jpg"
            name="James LaBrie"
            role="vocals"
          />
          <BandMemberCard
            image="https://dreamtheater.net/wp-content/uploads/2024/10/JLB-2024-square.jpg"
            name="James LaBrie"
            role="vocals"
          />
          <BandMemberCard
            image="https://dreamtheater.net/wp-content/uploads/2024/10/JLB-2024-square.jpg"
            name="James LaBrie"
            role="vocals"
          />
          <BandMemberCard
            image="https://dreamtheater.net/wp-content/uploads/2024/10/JLB-2024-square.jpg"
            name="James LaBrie"
            role="vocals"
          />
          <BandMemberCard
            image="https://dreamtheater.net/wp-content/uploads/2024/10/JLB-2024-square.jpg"
            name="James LaBrie"
            role="vocals"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default Albulgetails;
