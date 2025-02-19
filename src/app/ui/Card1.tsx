import Image from "next/image";

// template - card with image, text on top of image

const Card1 = ({
  image,
  text,
  timestamp,
  containerClassName,
  textClassName,
}: {
  image: string;
  text: string;
  timestamp: string;
  containerClassName?: string;
  textClassName?: string;
}) => {
  return (
    <div
      className={`relative w-full h-[420px] lg:w-[33.33%] lg:h-[500px] ${containerClassName}`}
    >
      <Image
        alt="card 1 image"
        src={image}
        fill
        className="object-cover brightness-75"
      />
      <div className="absolute left-[25px] bottom-[25px] max-w-[85%]">
        <p
          className={`uppercase text-[21px] font-normal text-white leading-[25px] tracking-[3px] ${textClassName}`}
        >
          {text}
        </p>
        <div className="flex items-center mt-[20px]">
          <span className="uppercase text-[12px] font-normal text-white leading-[14.4px] tracking-[1.8px]">
            {timestamp}
          </span>
          <span className="text-[12px] font-medium text-white leading-[12px] tracking-[1.8px] ml-[12px]">
            READ MORE
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
