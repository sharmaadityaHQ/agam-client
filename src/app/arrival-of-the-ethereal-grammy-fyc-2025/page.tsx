import PageContainer from "@/components/PageContainer";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";

const CampaignContent = {
  header: {
    text_1: "FOR YOUR GRAMMY® CONSIDERATION",
    text_2: "BEST GLOBAL MUSIC ALBUM. <br/> BEST GLOBAL MUSIC PERFORMANCE.",
    text_3: "ARRIVAL OF THE ETHEREAL",
  },
  body: {
    text_1:
      "Arrival of the Ethereal, Agam&apos;s third studio album, is a one-of-a-kind production crafted over eight years.",
    text_2:
      "Featuring collaborations with the GRAMMY® Award-winning Czech National Symphony Orchestra and GRAMMY® Award-winning Mohan Veena exponent Pt. Vishwa Mohan Bhatt, the album is a bold, boundary-breaking soundscape that reimagines global music on an unprecedented scale.",
    text_3: "ABOUT ARRIVAL OF THE ETHEREAL",
    text_4:
      "Arrival of the Ethereal is Agam&apos;s most ambitious work yet -  an eight-year journey that seeks to bring the centuries-old tradition of Carnatic music into conversation with the power and dynamism of progressive rock. The album breaks new ground as a genre-defining amalgam of diverse global influences, drawing from orchestral, jazz, funk, and world traditions, while remaining deeply rooted in Indian classical heritage.",
    text_5: "ABOUT AGAM",
    text_6:
      "Agam is an 18-year-old Carnatic–progressive rock collective that has carved a unique space in contemporary music. Rooted in the centuries-old depth of Carnatic classical tradition, the band reimagines it through the soundscapes of progressive rock and global influences, creating music that is both technically intricate and deeply approachable.",
    text_7: "FEATURED ARTISTS",
    text_8: "Pt. Vishwa Mohan Bhatt",
    text_9:
      "Pt. Vishwa Mohan Bhatt is a GRAMMY® Award-winning musician and one of India&apos;s most celebrated exponents of the slide guitar, known globally for inventing and mastering the Mohan Veena, a modified Hawaiian guitar adapted for Indian classical music.",
    text_10: "Czech national symphony orchestra",
    text_11:
      "The Czech National Symphony Orchestra (CNSO) is one of Europe&apos;s premier orchestras, renowned for its versatility across classical, jazz, film, and contemporary music. Founded in 1993 in Prague, the CNSO has performed with world-leading conductors, composers, and artists, and is celebrated for its recordings on major international projects, including collaborations on Hollywood film scores and global concert tours.",
  },
};

const Campaign = () => {
  return (
    <PageContainer>
      <div className="my-[15vh]">
        <div className="relative flex flex-col items-center bg-[url('/arrival-of-the-ethereal-grammy-fyc-2025/common_bg.webp')] bg-center bg-contain bg-no-repeat sm:bg-cover">
          <div className="w-[90%] z-[1]">
            <p className="text-[14px] text-white text-center font-medium leading-[17px] tracking-[2px] mt-[60px] lg:text-[18px] lg:leading-[18px] lg:tracking-[4px]">
              {CampaignContent.header.text_1}
            </p>
            <p className="text-[23px] text-white text-center font-medium leading-[30px] tracking-[6.5px] mt-[15px] lg:text-[45px] lg:leading-[45px] lg:tracking-[8px] lg:mt-[50px]">
              {CampaignContent.header.text_3}
            </p>
            <p className="text-[16px] text-white/70 text-center font-normal leading-[17px] tracking-[1px] mt-[15px] mb-[60px] lg:text-[30px] lg:leading-[30px] lg:tracking-[6.5px] lg:mt-[50px]">
              <span
                dangerouslySetInnerHTML={{
                  __html: CampaignContent.header.text_2,
                }}
              />
            </p>
          </div>
        </div>
        <div className="my-[10vh] mx-[5vw] lg:mx-[20vw]">
          <p
            className="text-white text-[20px] lg:text-[24px] font-normal text-center leading-[31px] lg:leading-[40px]"
            dangerouslySetInnerHTML={{
              __html: CampaignContent.body.text_1 ?? "",
            }}
          />
        </div>
        <div className="flex flex-col items-center mx-[5vw] lg:mx-[20vw]">
          <Image
            src="/arrival-of-the-ethereal-grammy-fyc-2025/publication_logos.webp"
            width={1055}
            height={128}
            alt="publication logos"
          />
          <Image
            alt="album asset"
            src="/agam_home_album.webp"
            width={8256}
            height={5504}
            className="mt-[50px]"
          />
        </div>
        <div className="my-[10vh] mx-[5vw] lg:mx-[20vw]">
          <iframe
            src="https://open.spotify.com/embed/album/42uhAq55nMYUKo19IKExmB?utm_source=generator&theme=0"
            width="100%"
            height="520"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        <div className="my-[10vh] mx-[5vw] lg:mx-[20vw]">
          <p
            className="text-white text-[20px] lg:text-[24px] font-normal text-center leading-[31px] lg:leading-[40px]"
            dangerouslySetInnerHTML={{
              __html: CampaignContent.body.text_2 ?? "",
            }}
          />
        </div>
        <div className="flex flex-col items-center bg-[url('/arrival-of-the-ethereal-grammy-fyc-2025/common_bg.webp')] bg-center bg-contain bg-no-repeat sm:bg-cover">
          <div className="w-[90%] my-[60px] z-[1]">
            <p className="text-white text-[15px] lg:text-[24px] font-normal text-center leading-[25px] lg:leading-[40px]">
              &apos;The way they transform Carnatic music, classical music into
              something which is so cool for younger people to listen to —
              younger or older, they make their sound as an experience&apos;. -{" "}
              <u>A R Rahman, Grammy Award Winner</u>
              <br />
              <br />
              &apos;Agam has created something very, very special here.&apos; -{" "}
              <u>KS Chithra, India&apos;s foremost playback singer</u>
            </p>
          </div>
        </div>
        <div className="mt-[10vh] mx-[5vw] lg:mx-[20vw]">
          <VideoPlayer
            videoUrl="/arrival-of-the-ethereal-grammy-fyc-2025/about.mp4"
            controls
            loop={false}
            muted={false}
          />
        </div>
        <div className="mt-[5vh] mb-[10vh] mx-[5vw] lg:mx-[20vw]">
          <p className="uppercase text-[18px] lg:text-[22px] text-center text-white font-normal leading-[137%] tracking-[3px]">
            {CampaignContent.body.text_3}
          </p>
          <p
            className="text-white text-[20px] lg:text-[24px] font-normal text-center leading-[31px] lg:leading-[40px] mt-[30px]"
            dangerouslySetInnerHTML={{
              __html: CampaignContent.body.text_4 ?? "",
            }}
          />
        </div>
        <div className="flex flex-col items-center bg-[url('/arrival-of-the-ethereal-grammy-fyc-2025/common_bg.webp')] bg-center bg-contain bg-no-repeat sm:bg-cover">
          <div className="w-[90%] py-[60px] z-[1]">
            <p className="text-white text-[15px] lg:text-[24px] font-normal text-center leading-[25px] lg:leading-[40px]">
              &apos;Your new album Arrival of the Ethereal is a beautiful
              celebration of your music, and uh, I love the twist you gave to
              Mokshamo — beautiful, it sounds beautiful.&apos; -{" "}
              <u>Hariharan, Leading Indian Musician & Ghazal maestro</u>
              <br />
              <br />
              &apos;Such incredible arrangements, beautiful singing, and wow,
              what great production! -{" "}
              <u>Salim Merchant, Leading Bollywood music composer</u>
            </p>
          </div>
        </div>
        <div className="mt-[5vh] mb-[10vh] mx-[5vw] lg:mx-[20vw]">
          <p className="uppercase text-[18px] lg:text-[22px] text-center text-white font-normal leading-[137%] tracking-[3px]">
            {CampaignContent.body.text_5}
          </p>
          <p
            className="text-white text-[20px] lg:text-[24px] font-normal text-center leading-[31px] lg:leading-[40px] mt-[30px]"
            dangerouslySetInnerHTML={{
              __html: CampaignContent.body.text_6 ?? "",
            }}
          />
        </div>
        <div className="mt-[5vh] mb-[10vh] mx-[5vw] lg:mx-[20vw]">
          <p className="uppercase text-[18px] lg:text-[22px] text-center text-white font-normal leading-[137%] tracking-[3px]">
            {CampaignContent.body.text_7}
          </p>
          <p
            className="text-white text-[18px] lg:text-[24px] font-medium text-center leading-[31px] lg:leading-[40px] mt-[30px]"
            dangerouslySetInnerHTML={{
              __html: CampaignContent.body.text_8 ?? "",
            }}
          />
          <p
            className="text-white text-[15px] lg:text-[24px] font-normal text-center leading-[27px] lg:leading-[40px] mt-[30px]"
            dangerouslySetInnerHTML={{
              __html: CampaignContent.body.text_9 ?? "",
            }}
          />
          <p
            className="text-white text-[18px] lg:text-[24px] font-medium text-center leading-[31px] lg:leading-[40px] mt-[30px]"
            dangerouslySetInnerHTML={{
              __html: CampaignContent.body.text_10 ?? "",
            }}
          />
          <p
            className="text-white text-[15px] lg:text-[24px] font-normal text-center leading-[27px] lg:leading-[40px] mt-[30px]"
            dangerouslySetInnerHTML={{
              __html: CampaignContent.body.text_11 ?? "",
            }}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default Campaign;
