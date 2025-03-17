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
        // <div className="relative flex flex-col items-center w-full">
        //     <div className="w-full relative">
        //         <Image alt="card 2 image" src={image} width={700} height={350}
        //             className="object-cover brightness-50 hover:brightness-100 hover:cursor-pointer" />

        //         <span className="absolute uppercase text-[20px] text-white text-center font-normal leading-[24px] tracking-[3px] mt-[20px]">
        //             {text}
        //         </span>
        //     </div>
        // </div>
        <div className="relative w-full flex flex-col items-center ml-1 mr-1 mb-8">
            {/* Image Container with Relative Positioning */}
            <div className="relative w-full">
                <Image
                    alt="card 2 image"
                    src={image}
                    width={700}
                    height={350}
                    className="object-cover w-full brightness-50 hover:brightness-100 hover:cursor-pointer"
                />

                {/* Text Overlay */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-[20px] text-white text-center font-normal leading-[24px] tracking-[3px]">
                    {text}
                </span>
            </div>
        </div>

    );
};

export default TourImageCard;
