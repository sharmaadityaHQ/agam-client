import Image from "next/image";
import Link from "next/link";

// card with image and text on top of image

const Card1 = ({
  image,
  text,
  timestamp,
  link,
  containerClassName,
  textClassName,
}: {
  image: string;
  text: string;
  timestamp: string;
  containerClassName?: string;
  textClassName?: string;
  link: string;
}) => {
  return (
    <div
      className={`relative w-full h-[420px] lg:w-[33.33%] lg:h-[500px] ${containerClassName}`}
    >
      <Link href={link}>
        <Image
          alt="card 1 image"
          src={image}
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute left-[25px] bottom-[25px] max-w-[85%]">
          <p
            className={`uppercase text-[21px] font-medium text-white leading-[25px] tracking-[3px] ${textClassName}`}
          >
            {text}
          </p>
          <div className="flex items-center mt-[20px]">
            <span className="uppercase text-[13px] font-medium text-white leading-[14.4px] tracking-[1.8px]">
              {timestamp}
            </span>
            <span className="text-[13px] font-medium text-white leading-[14.4px] tracking-[1.8px] ml-[10px]">
              / READ MORE
            </span>
            <Image
              src="/arrow_icon.png"
              alt="arrow icon"
              width={20}
              height={8}
              className="h-[8px] ml-[8px]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card1;
