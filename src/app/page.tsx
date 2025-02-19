import Image from "next/image";
import PageContainer from "./ui/PageContainer";
import Button from "./ui/Button";
import VideoPlayer from "./ui/VideoPlayer";
import Card1 from "./ui/Card1";
import Card2 from "./ui/Card2";

export default function Home() {
  return (
    <PageContainer>
      <div className="relative flex flex-col h-[100vh] items-center justify-center">
        <Image
          priority
          alt="hero image"
          src="https://dreamtheater.net/wp-content/uploads/2024/10/Parasomnia_Background-1-scaled.jpg"
          fill
          className="object-cover"
        />
        <div className="absolute bg-[#00000080] w-full h-full" />
        <div className="flex flex-col w-[88%] items-center z-[1]">
          <Image
            priority
            alt="hero-title"
            src="https://dreamtheater.net/wp-content/uploads/2023/04/DTLOGO-WHITE.png"
            width={2048}
            height={271}
          />
          <p className="text-[23px] text-white text-center font-normal leading-[23px] tracking-[11.6px] mt-[30px]">
            PARASOMNIA
          </p>
          <p className="text-[12px] text-white text-center font-normal leading-[17px] tracking-[6px] mt-[10px]">
            NEW ALBUM OUT NOW
          </p>
          <Button className="mt-[30px]">BUY/STREAM</Button>
        </div>
      </div>
      <div className="flex flex-wrap">
        <Card1
          image="https://dreamtheater.net/wp-content/uploads/2025/01/midnight-messiah-yt-thumb.jpg"
          text="Dream Theater release new single “Midnight Messiah” from new album Parasomnia"
          timestamp="January 22, 2025  /"
        />
        <Card1
          image="https://dreamtheater.net/wp-content/uploads/2024/12/DreamTheater_ABrokenMan_SingleCover_Embargo_03122024-copy-scaled.jpg"
          text="Dream Theater Releases New Single “A Broken Man” from Upcoming Album Parasomnia"
          timestamp="January 22, 2025  /"
        />
        <Card1
          image="https://dreamtheater.net/wp-content/uploads/2024/10/Parasomnia_Crop.jpg"
          text="Dream Theater release new single “Midnight Messiah” from new album Parasomnia"
          timestamp="January 22, 2025  /"
        />
      </div>
      <div className="relative flex flex-col h-[100vh] items-center justify-center">
        <VideoPlayer
          videoUrl="https://dreamtheater.net/wp-content/uploads/2024/10/DT_NT_Clip3_Intro_916_Reel.webm"
          className="absolute"
        />
        <div className="flex flex-col w-[88%] items-center z-[1]">
          <Image
            priority
            alt="hero-title"
            src="https://dreamtheater.net/wp-content/uploads/2023/04/DTLOGO-WHITE.png"
            width={2048}
            height={271}
          />
          <p className="text-[23px] text-white text-center font-bold leading-[23px] tracking-[11.6px] mt-[30px]">
            NIGHT TERROR
          </p>
          <p className="text-[16px] text-white text-center font-normal leading-[22.6px] tracking-[8px] mt-[10px]">
            NEW SINGLE + VIDEO OUT NOW
          </p>
          <Button className="mt-[30px]">WATCH VIDEO</Button>
        </div>
      </div>
      <div className="flex justify-center mt-[15vh]">
        <div className="flex flex-wrap gap-[50px] max-w-[75%]">
          <div className="flex flex-col items-center w-full xl:w-[42%]">
            <p className="text-[12px] text-white text-center font-normal leading-[12px] tracking-[4.2px]">
              THE NEW ALBUM
            </p>
            <p className="text-[23px] text-[#acacaa] text-center font-normal leading-[23px] tracking-[8px] mt-[20px]">
              PARASOMNIA
            </p>
            <p className="text-[12px] text-white text-center font-normal leading-[17px] tracking-[3.6px] mt-[12px]">
              OUT NOW
            </p>
            <p className="text-[14px] text-[#acacaa] text-center font-normal leading-[21.2px] mt-[20px]">
              Our new album, Parasomnia, marks a special new chapter for us as
              bandmates and as brothers. This collection of songs represents not
              only where we’ve come from but also where we’re heading next.
            </p>
            <p className="text-[14px] text-[#acacaa] text-center font-normal leading-[21.2px] mt-[20px]">
              We’re so excited for you to experience it.
            </p>
            <Button className="mt-[30px]">BUY/STREAM</Button>
          </div>
          <Image
            alt="album asset"
            src="https://dreamtheater.net/wp-content/uploads/2024/10/DreamTheater_Parasomnia_Cover_Embargo_11102024.jpg"
            width={900}
            height={900}
            className="w-full xl:w-[42%]"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[10vh]">
        <div className="flex flex-wrap justify-center gap-[50px] max-w-[90%]">
          <Card2
            image="https://dreamtheater.net/wp-content/uploads/2024/10/DT_Parasomnia_Deluxe_MockupSite.png"
            text="Parasomnia (Deluxe Box Set)"
            cta={{
              text: "BUY",
            }}
          />
          <Card2
            image="https://dreamtheater.net/wp-content/uploads/2024/10/DT_Parasomnia_Deluxe2_MockupSite.png"
            text="Parasomnia (Deluxe ArtBook)"
            cta={{
              text: "BUY",
            }}
          />
          <Card2
            image="https://dreamtheater.net/wp-content/uploads/2024/10/DT_Parasomnia_Vinyl1_MockupSite.png"
            text="Parasomnia (Ultra Clear 2LP Vinyl)"
            cta={{
              text: "BUY",
            }}
          />
          <Card2
            image="https://dreamtheater.net/wp-content/uploads/2024/10/DT_Parasomnia_Vinyl2_MockupSite.png"
            text="Parasomnia (Black 2LP Vinyl)"
            cta={{
              text: "BUY",
            }}
          />
          <Card2
            image="https://dreamtheater.net/wp-content/uploads/2024/10/DT_Parasomnia_Vinyl3_MockupSite.png"
            text="Parasomnia (Transparent Light Blue and Black Vinyl)"
            cta={{
              text: "BUY",
            }}
          />
          <Card2
            image="https://dreamtheater.net/wp-content/uploads/2024/10/DreamTheater_Parasomnia_Cover_Embargo_11102024.jpg"
            text="Parasomnia (Digital Album)"
            cta={{
              text: "BUY",
            }}
          />
        </div>
      </div>
      <div className="relative flex flex-col h-[85vh] items-center justify-center mt-[15vh]">
        <Image
          priority
          alt="hero image"
          src="https://dreamtheater.net/wp-content/uploads/2024/04/DT40-Background-Square.jpg"
          fill
          className="object-cover"
        />
        <div className="absolute bg-[#00000080] w-full h-full" />
        <div className="flex flex-col w-[88%] items-center z-[1]">
          <p className="uppercase text-[23px] text-white text-center font-bold leading-[23px] tracking-[3.5px]">
            40th Anniversary Tour
          </p>
          <Image
            alt="tour-image"
            src="https://dreamtheater.net/wp-content/uploads/2024/10/DT_Majesty_40.png"
            width={1250}
            height={363}
            className="mt-[40px]"
          />
          <Button className="mt-[40px]">GET TICKETS</Button>
        </div>
      </div>
    </PageContainer>
  );
}
