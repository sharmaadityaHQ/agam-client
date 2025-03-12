/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

// template - card with image, text on top of image

const TourHeadCard = ({
    image,
    textImage,
    text,
    timestamp,
    containerClassName,
    textClassName,
}: {
    image: string;
    textImage: string;
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
            <div className="ml-auto mr-auto mt-[40vh] w-[88%] relative">
                <Image
                    alt="card 1 image"
                    src={textImage}
                    width={1024}
                    height={135}
                    className="object-cover brightness-100"
                />
                <div className="flex items-center mt-[20px]">
                    <span className="uppercase text-[16px] text-white font-weight-bold tracking-[5px] leading-[1.4em]">
                        {timestamp}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TourHeadCard;
