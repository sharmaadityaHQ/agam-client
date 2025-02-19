import Card1 from "../ui/Card1";
import PageContainer from "../ui/PageContainer";

const News = () => {
  return (
    <PageContainer>
      <div className="my-[15vh]">
        <div className="flex flex-col items-center">
          <div className="w-[88%]">
            <p className="text-[60px] text-center text-white font-bold leading-[85px] tracking-[9px]">
              NEWS
            </p>
            <p className="uppercase text-[20px] text-center text-white font-normal leading-[28px] tracking-[3px] mt-[20px]">
              Stay up to date with all things Dream Theater
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[60px]">
          <div className="flex flex-wrap justify-center gap-[45px] w-full max-w-[90%]">
            <Card1
              image="https://dreamtheater.net/wp-content/uploads/2025/01/midnight-messiah-yt-thumb.jpg"
              text="Dream Theater release new single “Midnight Messiah” from new album Parasomnia"
              timestamp="January 22, 2025  /"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
            />
            <Card1
              image="https://dreamtheater.net/wp-content/uploads/2024/12/DreamTheater_ABrokenMan_SingleCover_Embargo_03122024-copy-scaled.jpg"
              text="Dream Theater Releases New Single “A Broken Man” from Upcoming Album Parasomnia"
              timestamp="December 3, 2024  /"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
            />
            <Card1
              image="https://dreamtheater.net/wp-content/uploads/2024/10/Parasomnia_Crop.jpg"
              text="Dream Theater Announces New Album Parasomnia"
              timestamp="October 9, 2024  /"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
            />
            <Card1
              image="https://dreamtheater.net/wp-content/uploads/2024/09/CleanShot-2024-10-10-at-14.40.32@2x.jpg"
              text="Dream Theater announce USA and Canada dates in 2025 for 40th Anniversary Tour!"
              timestamp="September 10, 2024  /"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
            />
            <Card1
              image="https://dreamtheater.net/wp-content/uploads/2024/10/CleanShot-2024-06-24-at-15.42.00@2x.jpg"
              text="Metropolis: Pt.2 Scenes From A Memory Novel by Peter Orullian"
              timestamp="June 24, 2024  /"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
            />
            <Card1
              image="https://dreamtheater.net/wp-content/uploads/2024/10/3_Cities_IG_Feed1_DT_Brazil_Tour_2024.jpg"
              text="Dream Theater is coming to BRAZIL in December 2024!"
              timestamp="May 14, 2024  /"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
            />
            <Card1
              image="https://dreamtheater.net/wp-content/uploads/2024/04/DT40-Background-Square.jpg"
              text="Dream Theater Announce 40th Anniversary Tour Kicking Off In Europe This October"
              timestamp="April 8, 2024  /"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
            />
            <Card1
              image="https://dreamtheater.net/wp-content/uploads/2024/03/CleanShot-2024-03-22-at-11%E2%80%AF.01.40@2x-scaled.jpg"
              text="In the studio for the next Dream Theater album!"
              timestamp="February 9, 2024  /"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
            />
            <Card1
              image="https://dreamtheater.net/wp-content/uploads/2024/10/DT-collagepic.jpg"
              text="Charlie Dominici 1951-2023"
              timestamp="November 17, 2023  /"
              textClassName="!font-bold"
              containerClassName="lg:w-[45%] xl:w-[30%]"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default News;
