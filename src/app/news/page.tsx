import Card1 from "@/components/Card1";
import PageContainer from "@/components/PageContainer";

const News = () => {
  return (
    <PageContainer>
      <div className="fixed inset-0 bg-[url('/agam_hero_image.webp')] bg-cover bg-center" />
      <div className="fixed inset-0 bg-[#00000080]" />
      <div className="my-[20vh] z-[1]">
        <div className="flex flex-col items-center">
          <div className="w-[88%]">
            <p className="text-[30px] lg:text-[75px] text-center text-white font-bold leading-[120%] tracking-[3px]">
              NEWS
            </p>
            <p className="uppercase text-[16px] lg:text-[22px] text-center text-white font-normal leading-[137%] tracking-[3px] mt-[5px]">
              Stay up to date with all things AGAM
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[60px]">
          <div className="flex flex-wrap justify-center gap-[45px] w-full max-w-[90%]">
            <Card1
              image="/home/agam_news_1.webp"
              text="Agam’s New Album Is Getting The Nod from A.R. Rahman, Hariharan and More"
              timestamp="June 19, 2025"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
              link="/news/agam-arrival-of-the-ethereal-album-interview"
            />
            <Card1
              image="/home/agam_news_2.webp"
              text="AGAM unveils new album at a charity concert in Bengaluru with Akshaya Patra"
              timestamp="June 14, 2025"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
              link="/news/agam-unveils-new-album-at-a-charity-concert-in-bengaluru-with-akshaya-patra"
            />
            <Card1
              image="/home/agam_news_3.webp"
              text="The Carnatic progressive rock band AGAM talks about their new album, ‘Arrival of the Ethereal’"
              timestamp="June 12, 2025"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
              link="/news/carnatic-progressive-rock-band-agam-talks-about-their-third-studio-album"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default News;
