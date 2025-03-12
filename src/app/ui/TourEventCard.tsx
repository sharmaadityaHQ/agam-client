import React from 'react';

const EventCard = ({ date, venueName, venueLocation, vipLink, soldOutLink }: {
    date: string;
    venueName: string;
    venueLocation: string;
    timestamp: string;
    vipLink?: string;
    soldOutLink?: string;
}) => {
    console.log('EventCard', { vipLink, soldOutLink });
    return (
        <div className="relative w-full lg:w-[33.33%] bg-gray-800 text-white p-6 rounded-2xl shadow-lg">
            {/* Event Description Section */}
            <div className="mb-4 flex flex-col items-center">
                <div className="text-lg">{date}</div>
                <div className="text-lg">{venueName}</div>
                <div className="text-lg">{venueLocation}</div>
            </div>

            {/* Event Links Section */}
            <div className="flex flex-col">
                <div className="flex-1 ml-auto mr-auto" style={{ width: "129px", height: "55px" }}>
                    <a
                        className="block text-white px-4 py-2 rounded text-center hover:bg-blue-600 border rounded-xs"
                        href="https://link.seated.com/2fad3439-acb9-48b6-ad03-3fa5a3aba8f9/2"
                        target="_top"
                        rel="noopener noreferrer"
                    >
                        VIP
                    </a>
                </div>
                <div className="flex-1 ml-auto mr-auto mt-[8px]" style={{ width: "129px", height: "55px" }}>
                    <a
                        className="block bg-red-500 text-white px-4 py-2 rounded text-center cursor-not-allowed"
                        href="https://link.seated.com/2fad3439-acb9-48b6-ad03-3fa5a3aba8f9"
                        target="_top"
                        rel="noopener noreferrer"
                    >
                        Sold Out
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
