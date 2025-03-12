import Image from "next/image";

interface IMemberDetail {
  name: string;
  image: string;
  details: Array<{
    label: string;
    value: string;
  }>;
  bio: string;
}

export default function MemberLayout({
  name,
  image,
  details,
  bio,
}: IMemberDetail) {
  return (
    <div className="x-root">
      <header className="x-masthead mb-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="h-[80px] flex items-center">
            <img 
              src="https://dreamtheater.net/wp-content/uploads/2023/04/DTLOGO-WHITE.png"
              alt="Dream Theater logo"
              className="h-[40px] w-auto"
            />
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="relative h-[400px] bg-gray-800">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-2 font-palatino-pro">
            <h1 className="text-[40px] font-bold mb-6 italic">{name}</h1>
            
            <div className="space-y-4 mb-8">
              {details.map((detail, index) => (
                <div key={index} className="text-[18px]">
                  <span className="font-bold">{detail.label}</span>
                  <span className="ml-2">{detail.value}</span>
                </div>
              ))}
            </div>

            <div className="prose max-w-none text-[16px] leading-relaxed italic">
              {bio}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
