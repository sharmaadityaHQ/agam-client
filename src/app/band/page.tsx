import Image from "next/image";
import Link from "next/link";

import BackgroundRotator from "@/app/ui/BackgroundRotator";

export default function BandPage() {
  const currentMembers = [
    {
      name: "James LaBrie",
      role: "Vocals, 1991-present",
      image:
        "https://dreamtheater.net/wp-content/uploads/2024/10/JLB-2024-square.jpg",
      link: "/band-member/james-labrie",
    },
    {
      name: "John Petrucci",
      role: "Guitar, 1985-present",
      image:
        "https://dreamtheater.net/wp-content/uploads/2024/10/JP-2024-square.jpg",
      link: "/band-member/john-petrucci",
    },
    {
      name: "John Myung",
      role: "Bass, 1985-present",
      image:
        "https://dreamtheater.net/wp-content/uploads/2024/10/JM-2024-square.jpg",
      link: "/band-member/john-myung",
    },
    {
      name: "Jordan Rudess",
      role: "Keyboards, 1999-present",
      image:
        "https://dreamtheater.net/wp-content/uploads/2024/10/JR-2024-square.jpg",
      link: "/band-member/jordan-rudess",
    },
    {
      name: "Mike Portnoy",
      role: "Drums, 1985–2010, 2023–present",
      image:
        "https://dreamtheater.net/wp-content/uploads/2024/10/MP-2024-square.jpg",
      link: "/band-member/mike-portnoy",
    },
  ];

  const pastMembers = [
    {
      name: "Mike Mangini",
      role: "Drums, 2011-2023",
      image:
        "https://dreamtheater.net/wp-content/uploads/2018/12/dt-2019-mm.jpg",
      link: "/band-member/mike-mangini",
    },
    {
      name: "Kevin Moore",
      role: "Keyboards, 1986-1994",
      image:
        "https://dreamtheater.net/wp-content/uploads/2024/10/kevinmoore-e1728387181109.jpg",
      link: "/band-member/kevin-moore",
    },
    {
      name: "Derek Sherinian",
      role: "Keyboards, 1995–1999",
      image: "https://dreamtheater.net/wp-content/uploads/2017/07/derek.jpg",
      link: "/band-member/derek-sherinian",
    },
    {
      name: "Charlie Dominici",
      role: "Vocals, 1987-1989",
      image: "https://dreamtheater.net/wp-content/uploads/2017/09/dominici.jpg",
      link: "/band-member/charlie-dominici",
    },
  ];

  return (
    <BandContainer>
      <div className="pt-[15vh] pb-16 px-4">
        <div className="max-w-6xl mb-12 mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-2">
            The Band
          </h1>
          <p className="text-xl uppercase tracking-wider font-inherit leading-[1.4] text-center">
            Dream Theater, Past & Present
          </p>
        </div>
      </div>

      {/* Current Members Section */}
      <section className="max-w-[90%] mb-20 mx-auto">
        <div className="flex flex-wrap flex-grow flex-shrink basis-auto min-w-0 min-h-0 justify-center items-stretch content-stretch -m-[46px] z-auto mx-auto border-0 p-[1px] text-base">
          {currentMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <hr className="border-t border-gray-500 opacity-50" />
      </div>

      {/* Past Members Section */}
      <section className="mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold uppercase tracking-widest mb-16 text-center">
          Past Band Members
        </h2>
        <div className="flex flex-wrap flex-grow flex-shrink basis-auto min-w-0 min-h-0 justify-center items-stretch content-stretch -m-[46px] z-auto mx-auto border-0 p-[1px] text-base">
          {pastMembers.map((member, index) => (
            <MemberCard key={index} member={member} isPast={true} />
          ))}
        </div>
      </section>

      {/* Footer */}
    </BandContainer>
  );
}

function MemberCard({
  member,
  isPast,
}: {
  member: { name: string; role: string; image: string; link: string };
  isPast?: boolean;
}) {
  return (
    <div
      style={{
        flexBasis: isPast
          ? "calc(25% - clamp(0px,var(--gap),9999px))"
          : "calc(33.33% - clamp(0px,var(--gap),9999px))",
        marginTop: "calc(90px / 2)",
        marginBottom: "calc(90px / 2)",
        marginRight: "calc(90px / 2)",
        marginLeft: "calc(90px / 2)",
      }}
      className="flex flex-col justify-center items-center flex-wrap content-center z-[1] text-center text-base border-0 min-w-0"
    >
      <Link href={member.link} className="block w-full mb-4">
        <div className="relative overflow-hidden rounded-full w-4/5 mx-auto aspect-square mb-6 hover-pulse min-w-[200px]">
          <div className="w-full h-full">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={500}
              height={500}
              className="object-cover w-full h-full transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="group">
          <h3 className="text-[1.5em] font-inherit uppercase tracking-[0.15em] -mr-[0.15em] leading-[1.2] text-center text-white mb-1 group-hover:scale-105 transition-transform duration-300">
            {member.name}
          </h3>
          <p className="text-white font-inherit text-base normal-case tracking-[0] leading-[1.4] text-center mt-[0.35em] group-hover:scale-105 transition-transform duration-300">
            {member.role}
          </p>
        </div>
      </Link>
    </div>
  );
}

function BandContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white relative">
      <BackgroundRotator />

      {children}
    </div>
  );
}
