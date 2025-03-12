import Image from "next/image";

import { BandMember } from "@/app/types/bandmember";

export default function BandMembers() {
  const members: BandMember[] = [
    {
      name: "James LaBrie",
      role: "Vocals",
      years: "1991-present",
      img: "https://dreamtheater.net/wp-content/uploads/2017/09/James53comp.jpg",
      bio: "Canadian vocalist known for his powerful tenor voice and dynamic stage presence.",
    },
    {
      name: "John Petrucci",
      role: "Guitar",
      years: "1985-present",
      img: "https://dreamtheater.net/wp-content/uploads/2017/09/John123comp.jpg",
      bio: "Co-founder and primary composer, renowned for his technical proficiency and melodic playing.",
    },
    {
      name: "John Myung",
      role: "Bass",
      years: "1985-present",
      img: "https://dreamtheater.net/wp-content/uploads/2017/09/JMX56comp.jpg",
      bio: "Co-founder and bassist, known for his technical precision and intricate bass lines.",
    },
    {
      name: "Jordan Rudess",
      role: "Keyboards",
      years: "1999-present",
      img: "https://dreamtheater.net/wp-content/uploads/2017/09/Jordan35comp.jpg",
      bio: "Virtuoso keyboardist who joined the band in 1999, known for his classical training and innovative sounds.",
    },
    {
      name: "Mike Mangini",
      role: "Drums",
      years: "2011-present",
      img: "https://dreamtheater.net/wp-content/uploads/2017/09/mikemangini.jpg",
      bio: "Drummer who joined after Mike Portnoy's departure, known for his technical precision and world record-setting speed.",
    },
  ];

  const pastMembers: BandMember[] = [
    {
      name: "Mike Portnoy",
      role: "Drums",
      years: "1985-2010",
      img: "https://dreamtheater.net/wp-content/uploads/2017/09/Mike95comp.jpg",
      bio: "Original drummer and co-founder, known for his complex rhythms and conceptual contributions.",
    },
    {
      name: "Kevin Moore",
      role: "Keyboards",
      years: "1985-1994",
      img: "https://dreamtheater.net/wp-content/uploads/2017/09/Band199.comp_.jpg",
      bio: "Original keyboardist who contributed to the band's early sound and lyrical direction.",
    },
    {
      name: "Derek Sherinian",
      role: "Keyboards",
      years: "1994-1999",
      img: "https://dreamtheater.net/wp-content/uploads/2017/09/Band200.acomp_.jpg",
      bio: "Keyboardist who played on 'Falling Into Infinity' before being replaced by Jordan Rudess.",
    },
    {
      name: "Charlie Dominici",
      role: "Vocals",
      years: "1987-1990",
      img: "https://dreamtheater.net/wp-content/uploads/2017/09/dominici.jpg",
      bio: "Early vocalist who performed on the band's debut album 'When Dream and Day Unite'.",
    },
  ];

  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-4xl font-bold mb-12 text-center">THE BAND</h2>
        <h3 className="text-xl font-light mb-12 text-center uppercase tracking-widest">
          DREAM THEATER, PAST & PRESENT
        </h3>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-10 text-center">
            Current Members
          </h3>
          <div className="flex flex-wrap justify-center gap-12">
            {members.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center w-64"
              >
                <div className="relative w-56 h-56 mb-6 overflow-hidden rounded-full">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 224px"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">
                  {member.name.toUpperCase()}
                </h3>
                <p className="text-gray-400 text-center mb-1">
                  {member.role} ({member.years})
                </p>
                {member.bio && (
                  <p className="text-gray-300 text-center text-sm">
                    {member.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-10 text-center">Past Members</h3>
          <div className="flex flex-wrap justify-center gap-12">
            {pastMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center w-64"
              >
                <div className="relative w-56 h-56 mb-6 overflow-hidden rounded-full">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 224px"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">
                  {member.name.toUpperCase()}
                </h3>
                <p className="text-gray-400 text-center mb-1">
                  {member.role} ({member.years})
                </p>
                {member.bio && (
                  <p className="text-gray-300 text-center text-sm">
                    {member.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
