import Image from "next/image";
import PageContainer from "../../components/PageContainer";
import Link from "next/link";

const bandMembers = [
  {
    name: "Harish",
    role: "Vocals",
    image: "/harish.webp",
    link: "https://www.instagram.com/hsrkofficial",
  },
  {
    name: "Swamy",
    role: "Keyboards",
    image: "/swamy.webp",
    link: "https://www.instagram.com/rainyharp",
  },
  {
    name: "Praveen",
    role: "Guitars",
    image: "/praveen.webp",
    link: "https://www.instagram.com/praveen213",
  },
  {
    name: "Yadhunandan",
    role: "Drums",
    image: "/yadhu.webp",
    link: "https://www.instagram.com/drummachari",
  },
  {
    name: "Shiva",
    role: "Multi-Percussionist",
    image: "/shiva.webp",
    link: "https://www.instagram.com/drummershiva",
  },
  {
    name: "Aditya Kashyap",
    role: "Bass",
    image: "/aditya_kashyap.webp",
    link: "https://www.instagram.com/aditya_kasyap",
  },
];

const Band = () => {
  return (
    <PageContainer>
      <div className="my-[20vh]">
        <div className="flex flex-col items-center">
          <div className="w-[90%]">
            <p className="text-[30px] lg:text-[75px] text-center text-white font-bold leading-[120%] tracking-[3px]">
              THE BAND
            </p>
            <p className="uppercase text-[16px] lg:text-[22px] text-center text-white font-normal leading-[137%] tracking-[3px] mt-[5px]">
              AGAM is a multiple award winning contemporary carnatic rock act
              from Bangalore, India
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[60px] lg:mt-[120px]">
          <div className="flex flex-wrap justify-center items-center gap-[60px] md:gap-[100px] lg:gap-[140px] max-w-[90%]">
            {bandMembers?.map((member, index) => (
              <div
                className="flex flex-col items-center w-full md:w-[40%] lg:w-[25%]"
                key={index}
              >
                <Link href={member?.link} target="_blank">
                  <div className="relative h-[280px] w-[280px] overflow-hidden rounded-[50%] md:h-[320px] md:w-[320px] lg:h-[375px] lg:w-[375px] xl:h-[310px] xl:w-[310px] hover:scale-110 hover:brightness-125 transition-all duration-300 cursor-pointer">
                    <Image
                      src={member?.image}
                      alt={member?.name}
                      fill
                      className="object-contain rounded-[50%]"
                    />
                  </div>
                </Link>
                <p className="uppercase text-[20px] text-white text-center font-normal leading-[24px] tracking-[3px] mt-[45px] lg:text-[30px] lg:leading-[30px] lg:tracking-[6px]">
                  {member?.name}
                </p>
                <p className="text-[20px] text-white text-center font-normal leading-[28px] mt-[5px] lg:text-[30px] lg:leading-[30px] lg:tracking-[6px] lg:mt-[20px]">
                  {member?.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Band;
