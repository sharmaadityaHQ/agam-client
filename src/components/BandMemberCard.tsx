import Image from "next/image";

const BandMemberCard = ({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="flex flex-col items-center w-full min-[480px]:w-[40%] md:w-[28%] lg:w-auto">
      <Image
        alt="band member"
        src={image}
        width={125}
        height={125}
        className="rounded-full"
      />
      <p className="uppercase text-[16px] text-white font-bold leading-[16px] trailing-[2.4px] mt-[25px]">
        {name}
      </p>
      <p className="uppercase text-[13px] text-white font-normal leading-[18.2px] tracking-[1.95px] mt-[5px]">
        {role}
      </p>
    </div>
  );
};

export default BandMemberCard;
