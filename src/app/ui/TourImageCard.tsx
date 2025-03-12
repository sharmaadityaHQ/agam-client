import Image from "next/image";

// template - card with image, text, cta

const TourImageCard = ({
    image,
    text,
}: {
    image: string;
    text: string;
}) => {
    return (
        <div className="flex flex-col items-center w-full md:w-[45%] xl:w-[30%]">
            <div className="p-[20px]">
                <Image alt="card 2 image" src={image} width={640} height={640} />
            </div>
            <p className="uppercase text-[20px] text-white text-center font-normal leading-[24px] tracking-[3px] mt-[20px]">
                {text}
            </p>
        </div>
    );
};

export default TourImageCard;
