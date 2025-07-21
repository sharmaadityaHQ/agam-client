import Image from "next/image";
import PageContainer from "../components/PageContainer";
import Button from "../components/Button";
import VideoPlayer from "../components/VideoPlayer";
import Card1 from "../components/Card1";
// import Card2 from "../components/Card2";
import Link from "next/link";

const Home = () => {
  return (
    <PageContainer>
      <div className="relative flex flex-col h-[100vh] items-center justify-center">
        <VideoPlayer
          className="absolute"
          videoUrl="/home/agam_hero_video.webm"
          posterUrl="/home/agam_hero_video_thumbnail.webp"
        />
        <div className="absolute bg-[#00000080] w-full h-full" />
        <div className="flex flex-col w-[85%] items-center z-[1]">
          <p className="text-[45px] text-white text-center font-semibold leading-[45px] tracking-[6px] lg:text-[100px] lg:leading-[100px] lg:tracking-[8px]">
            AGAM
          </p>
          <p className="text-[23px] text-white text-center font-medium leading-[30px] tracking-[6.5px] mt-[40px] lg:text-[45px] lg:leading-[45px] lg:tracking-[8px]">
            WALK OF THE BRIDE
          </p>
          <p className="text-[12px] text-white text-center font-normal leading-[17px] tracking-[5px] mt-[20px] lg:text-[30px] lg:leading-[30px] lg:tracking-[6.5px]">
            NEW MUSIC VIDEO OUT NOW
          </p>
          <Button className="mt-[40px] lg:text-[20px] lg:px-[30px] lg:py-[20px]">
            <Link href="https://youtu.be/RsY1uHr3Ztc" target="_blank">
              WATCH NOW
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap">
        <Card1
          image="/home/agam_news_1.webp"
          text="Agam’s New Album Is Getting The Nod from A.R. Rahman, Hariharan and More"
          timestamp="June 19, 2025"
          link="/news/agam-arrival-of-the-ethereal-album-interview"
        />
        <Card1
          image="/home/agam_news_2.webp"
          text="AGAM unveils new album at a charity concert in Bengaluru with Akshaya Patra"
          timestamp="June 14, 2025"
          link="/news/agam-unveils-new-album-at-a-charity-concert-in-bengaluru-with-akshaya-patra"
        />
        <Card1
          image="/home/agam_news_3.webp"
          text="The Carnatic progressive rock band AGAM talks about their new album, ‘Arrival of the Ethereal’"
          timestamp="June 12, 2025"
          link="/news/carnatic-progressive-rock-band-agam-talks-about-their-third-studio-album"
        />
      </div>
      <div className="relative flex flex-col h-[100vh] items-center justify-center">
        <VideoPlayer
          className="absolute"
          videoUrl="/home/agam_home_video.mp4"
          posterUrl="/home/agam_home_video_thumbnail.webp"
        />
        <div className="flex flex-col w-[85%] items-center z-[1]">
          <p className="text-[45px] text-white text-center font-semibold leading-[45px] tracking-[6px] lg:text-[100px] lg:leading-[100px] lg:tracking-[8px]">
            AGAM
          </p>
          <p className="text-[23px] text-white text-center font-medium leading-[30px] tracking-[6.5px] mt-[35px] lg:text-[45px] lg:leading-[45px] lg:tracking-[8px]">
            THE SILENCE THAT REMAINS
          </p>
          <p className="text-[16px] text-white text-center font-normal leading-[22.6px] tracking-[4px] mt-[20px] lg:text-[30px] lg:leading-[30px] lg:tracking-[6.5px]">
            NEW MUSIC VIDEO OUT NOW
          </p>
          <Button className="mt-[30px] lg:text-[20px] lg:px-[30px] lg:py-[20px]">
            <Link href="https://youtu.be/0ck1e1F8qU0" target="_blank">
              WATCH NOW
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-[15vh]">
        <div className="flex flex-wrap items-center gap-[50px] max-w-[85%] lg:gap-[150px]">
          <div className="flex flex-col items-center w-full xl:w-[42%]">
            <p className="text-[12px] text-white text-center font-normal leading-[12px] tracking-[4.2px] lg:text-[20px] lg:leading-[20px] lg:tracking-[6px]">
              THE NEW ALBUM
            </p>
            <p className="text-[23px] text-[#acacaa] text-center font-normal leading-[23px] tracking-[8px] mt-[20px] lg:text-[45px] lg:leading-[45px] lg:tracking-[8px] lg:mt-[30px]">
              ARRIVAL OF THE ETHEREAL
            </p>
            <p className="text-[12px] text-white text-center font-normal leading-[17px] tracking-[3.6px] mt-[12px] lg:text-[20px] lg:leading-[20px] lg:tracking-[6px] lg:mt-[25px]">
              OUT NOW
            </p>
            <p className="text-[14px] text-[#acacaa] text-center font-normal leading-[21.2px] mt-[20px] lg:text-[18px] lg:leading-[28px] lg:tracking-[6px] lg:mt-[40px]">
              It’s taken us eight years to get here. What started as scattered
              ideas became sleepless nights, quiet breakthroughs, and moments we
              almost gave up. We found strength in each other and in over 300
              musicians across three continents who believed in the vision. We
              leaned on a thousand years of tradition, not to preserve it, but
              to make it our own. This is the most personal thing we’ve ever
              made.
            </p>
            <p className="text-[14px] text-[#acacaa] text-center font-normal leading-[21.2px] mt-[20px] lg:text-[18px] lg:leading-[18px] lg:tracking-[6px] lg:mt-[30px]">
              We’re so excited for you to experience it.
            </p>
            <Button className="mt-[30px] lg:text-[20px] lg:px-[30px] lg:py-[20px]">
              <Link href="https://youtu.be/4hZMrzO2_XM" target="_blank">
                WATCH NOW
              </Link>
            </Button>
          </div>
          <Image
            alt="album asset"
            src="/agam_home_album.webp"
            width={8256}
            height={5504}
            className="w-full xl:w-[42%]"
          />
        </div>
      </div>
      {/* TODO: enable this section after asset availability */}
      {/* <div className="flex justify-center mt-[10vh]">
        <div className="flex flex-wrap justify-center gap-[50px] max-w-[90%]">
          <Card2
            image=""
            text="Parasomnia (Deluxe Box Set)"
            cta={{
              text: "BUY",
            }}
          />
          <Card2
            image=""
            text="Parasomnia (Deluxe ArtBook)"
            cta={{
              text: "BUY",
            }}
          />
          <Card2
            image=""
            text="Parasomnia (Ultra Clear 2LP Vinyl)"
            cta={{
              text: "BUY",
            }}
          />
          <Card2
            image=""
            text="Parasomnia (Black 2LP Vinyl)"
            cta={{
              text: "BUY",
            }}
          />
          <Card2
            image=""
            text="Parasomnia (Transparent Light Blue and Black Vinyl)"
            cta={{
              text: "BUY",
            }}
          />
          <Card2
            image=""
            text="Parasomnia (Digital Album)"
            cta={{
              text: "BUY",
            }}
          />
        </div>
      </div> */}
      <div className="relative flex flex-col h-[60vh] items-center justify-center mt-[10vh] lg:h-[100vh] lg:mt-[20vh]">
        <Image
          priority
          alt="hero image"
          src="/agam_home_tour.webp"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex justify-center mt-[40px] mb-[100px] lg:mt-[80px]">
        <Button className="lg:text-[20px] lg:px-[30px] lg:py-[20px]">
          <Link
            href="https://in.bookmyshow.com/events/agam-arrival-of-the-ethereal-hyderabad/ET00450046"
            target="_blank"
          >
            GET TICKETS
          </Link>
        </Button>
      </div>
    </PageContainer>
  );
};

export default Home;
