import PageContainer from "@/components/PageContainer";

const newsDetails = [
  {
    id: "agam-arrival-of-the-ethereal-album-interview",
    backgroundImage: "/agam_hero_image.webp",
    title:
      "Agam’s New Album Is Getting The Nod from A.R. Rahman, Hariharan and More",
    date: "June 19, 2025",
    content:
      'Carnatic progressive rock band Agam played two sold-out auditorium shows on consecutive nights last weekend in Bengaluru, in different parts of the city. <br/><br/> Though these performances were part of Music for Meals, a fundraiser for the Akshaya Patra Foundation, long queues of fans and packed auditoriums have long been a hallmark of Agam’s journey—ever since their days as a seven-piece band squeezing onto smaller club stages. Today, they’re backed by full-scale production, complete with immersive lighting, visuals, and a catalogue spanning three albums—riffs, Carnatic vocals, and all. <br/><br/> Across two-hour sets, Agam introduced audiences to their new album Arrival of the Ethereal, performing four new songs alongside fan favorites. True to their indulgent prog style, they blended traditional roots with influences from American prog titans like Dream Theater, giving even classical purists a taste of their layered sound. <br/> <br/> <a href="https://rollingstoneindia.com/agam-arrival-of-the-ethereal-album-interview/amp/" target="_blank">View full article</a>',
  },
  {
    id: "agam-unveils-new-album-at-a-charity-concert-in-bengaluru-with-akshaya-patra",
    backgroundImage: "/agam_hero_image.webp",
    title:
      "AGAM unveils new album at a charity concert in Bengaluru with Akshaya Patra",
    date: "June 14, 2025",
    content:
      'The Akshaya Patra Foundation - a non-profit committed to eradicating child hunger through its mid-day meal programme - has partnered with AGAM, the acclaimed seven-member carnatic-progressive rock band, for a special charity concert titled Music for Meals. What sets this show apart? The band will be launching their highly anticipated new album Arrival of the Ethereal! The debut single from this yet-to-be-released album, The Silence That Remains, has already gained significant traction online thanks to its evocative music video. Ahead of their performance in the city, this weekend, we caught up with lead vocalist Harish Sivaramakrishnan to learn more about the vision behind the Music for Meals initiative and get an exclusive glimpse into the new album. <br/> <br/> <a href="https://www.indulgexpress.com/culture/music/2025/Jun/14/agam-unveils-new-album-at-a-charity-concert-in-bengaluru-with-akshaya-patra" target="_blank">View full article</a>',
  },
  {
    id: "carnatic-progressive-rock-band-agam-talks-about-their-third-studio-album",
    backgroundImage: "/agam_hero_image.webp",
    title:
      "The Carnatic progressive rock band AGAM talks about their new album, ‘Arrival of the Ethereal’",
    date: "June 12, 2025",
    content:
      '“This is the most personal thing that we have made.” That is how AGAM, the band that makes Carnatic music rock, defines Arrival of the Ethereal, their third studio album. “It encompasses our journey,” says Harish Sivaramakrishnan, lead vocalist of the Bengaluru-based band. <br/> <br/> The band, formed in 2003, and active on the live show circuit since 2007, has taken almost eight years to bring out this album. Although work on it started after the release of their second studio album, A Dream To Remember (2017), the pandemic upset their plans. “The plan was to release it in 2020. But when COVID-19 struck, there were no shows, zero income and total uncertainty. We came back from a situation where we had no self-belief. That is why we consider the album the most personal thing.” <br/> <br/> <a href="https://www.thehindu.com/entertainment/movies/carnatic-progressive-rock-band-agam-talks-about-their-third-studio-album/article69679476.ece" target="_blank">View full article</a>',
  },
];

const NewsDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const news = newsDetails.find((news) => news.id === id);

  return (
    <PageContainer>
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${news?.backgroundImage})`,
        }}
      />
      <div className="fixed inset-0 bg-[#00000080]" />
      <div className="flex justify-center my-[20vh]">
        <div className="flex flex-col w-[90%] p-[20px] bg-[#00000080] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-[1.5px]">
          <p className="text-white text-[26px] lg:text-[40px] font-normal leading-[31px] mb-[10px] lg:mb-[40px]">
            {news?.title}
          </p>
          <p className="text-white/50 text-[14px] lg:text-[18px] uppercase font-semibold leading-[21px] mb-[25px] lg:mb-[60px]">
            {news?.date}
          </p>
          <p
            className="news-content text-white text-[20px] lg:text-[24px] font-normal leading-[31px] lg:leading-[40px]"
            dangerouslySetInnerHTML={{ __html: news?.content! }}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default NewsDetail;
