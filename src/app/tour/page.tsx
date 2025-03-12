import PageContainer from "../ui/PageContainer";
import TourEventCard from "../ui/TourEventCard";
import TourHeadCard from "../ui/TourHeadCard";
import TourImageCard from "../ui/TourImageCard";

const News = () => {
    return (
        <PageContainer>
            <div className="my-[15vh]">
                <div className="flex flex-col items-center">
                    <TourHeadCard
                        image="https://dreamtheater.net/wp-content/uploads/2024/10/THE-02-108-copy.jpg"
                        textImage="https://dreamtheater.net/wp-content/uploads/2023/04/DTLOGO-WHITE.png"
                        text="Dream Theater"
                        timestamp="40th Anniversary Tour"
                        textClassName="!font-bold"
                        containerClassName="lg:w-[45%] xl:w-[30%]"
                    />
                    <div className="w-[88%]">
                        <p className="text-[60px] text-center text-white font-bold leading-[85px] tracking-[9px]">
                            NEWS
                        </p>
                        <p className="uppercase text-[20px] text-center text-white font-normal leading-[28px] tracking-[3px] mt-[20px]">
                            Stay up to date with all things Dream Theater
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-[60px]">
                    <div className="flex flex-wrap justify-center gap-[45px] w-full max-w-[90%]">
                        <TourEventCard
                            date={"March 20, 2025"}
                            venueName={"The Fillmore Miami Beach"}
                            venueLocation={"Miami Beach, FL"}
                            timestamp={"On Sale Now"}
                            vipLink={"https://dreamtheater.net/vip"} // VIP link
                            soldOutLink={"https://dreamtheater.net/sold-out"} // Sold Out link

                        />
                        <TourEventCard
                            date={"March 20, 2025"}
                            venueName={"The Fillmore Miami Beach"}
                            venueLocation={"Miami Beach, FL"}
                            timestamp={"On Sale Now"}
                            vipLink={"https://dreamtheater.net/vip"} // VIP link
                            soldOutLink={"https://dreamtheater.net/sold-out"} // Sold Out link

                        />
                        <TourEventCard
                            date={"March 20, 2025"}
                            venueName={"The Fillmore Miami Beach"}
                            venueLocation={"Miami Beach, FL"}
                            timestamp={"On Sale Now"}
                            vipLink={"https://dreamtheater.net/vip"} // VIP link
                            soldOutLink={"https://dreamtheater.net/sold-out"} // Sold Out link

                        />
                        <TourEventCard
                            date={"March 20, 2025"}
                            venueName={"The Fillmore Miami Beach"}
                            venueLocation={"Miami Beach, FL"}
                            timestamp={"On Sale Now"}
                            vipLink={"https://dreamtheater.net/vip"} // VIP link
                            soldOutLink={"https://dreamtheater.net/sold-out"} // Sold Out link

                        />
                        <TourEventCard
                            date={"March 20, 2025"}
                            venueName={"The Fillmore Miami Beach"}
                            venueLocation={"Miami Beach, FL"}
                            timestamp={"On Sale Now"}
                            vipLink={"https://dreamtheater.net/vip"} // VIP link
                            soldOutLink={"https://dreamtheater.net/sold-out"} // Sold Out link

                        />
                        <TourEventCard
                            date={"March 20, 2025"}
                            venueName={"The Fillmore Miami Beach"}
                            venueLocation={"Miami Beach, FL"}
                            timestamp={"On Sale Now"}
                            vipLink={"https://dreamtheater.net/vip"} // VIP link
                            soldOutLink={"https://dreamtheater.net/sold-out"} // Sold Out link

                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2024/10/DT-EDMONTON-10.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2024/10/Dream-Theater-Eventim-Apollo-29-copy.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2024/10/Dream-Theater-by-Alex-Matthews-25-of-28.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/AU0V4488.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/img2comp.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/2016-02-IMG_4396-Dream-Theater-Londoncomp.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/DSC_0304comp.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/DSC_5414comp.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/700_0850comp.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/End10comp.jpeg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/Jordan37comp.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/07/score-background.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/Stuttgart227comp.jpeg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/006_9-comp.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2017/09/003_03-squashed.jpeg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2024/10/DT-Live2000-MickHutson-ShepherdsBushLondon-4.jpg"
                            text="Dream Theater"
                        />
                        <TourImageCard
                            image="https://dreamtheater.net/wp-content/uploads/2024/10/DT-IAW-92-1-1.jpg"
                            text="Dream Theater"
                        />
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default News;
