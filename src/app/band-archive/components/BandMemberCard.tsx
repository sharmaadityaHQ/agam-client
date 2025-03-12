import Image from "next/image";

export interface BandMember {
  name: string;
  role: string;
  years: string;
  img: string;
  bio?: string;
}

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
    // Add other current members
  ];

  const pastMembers: BandMember[] = [
    {
      name: "Mike Portnoy",
      role: "Drums",
      years: "1985-2010",
      img: "https://dreamtheater.net/wp-content/uploads/2017/09/Mike95comp.jpg",
      bio: "Original drummer and co-founder, known for his complex rhythms and conceptual contributions.",
    },
    // Add other past members
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">Current Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.name} className="bg-gray-800 rounded-lg p-6">
              <div className="relative h-64 w-full mb-4 hover:pulse animate-infinite">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="rounded object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:pulse">{member.name}</h3>
              <p className="text-gray-400 mb-2">
                {member.role} ({member.years})
              </p>
              <p className="text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Past Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastMembers.map((member) => (
            <div key={member.name} className="bg-gray-800 rounded-lg p-6">
              <div className="relative h-64 w-full mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="rounded object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-400 mb-2">
                {member.role} ({member.years})
              </p>
              <p className="text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
