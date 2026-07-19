import React from "react";
import PlaceCard from "../../Components/PlaceCard";
import MyCalendar from "../../Components/MyCalender";
import NewsCard from "../../Components/NewsCard";
import Carousel from "../../Components/TopPickCarousel";
import Frame from "../../assets/TopPickFrame.png";
import img1 from "../../assets/TopPickImg.jpg";
import img2 from "../../assets/TopPickImg1.jpg";
import img3 from "../../assets/TopPickImg2.jpg";
import Icon from "../../assets/location.png";

const TopPicks = () => {
  return (
    <div className="w-full pt-14 md:pt-0 px-1 pb-4 md:px-0 md:pb-6">
      {/* GRID WITH CUSTOM WIDTH */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* LEFT SIDE (WIDER) */}
        <div className="flex flex-col gap-6 w-full min-w-0">
          {/* CAROUSEL */}
          <div className="w-full h-[180px] sm:h-[200px] md:h-[232px] bg-gray-200 rounded-xl relative overflow-hidden">
            <Carousel />

            <img
              src={Frame}
              alt="frame"
              className="w-[51px] h-[55px] absolute bottom-[10px] left-[10px] rounded-[8px] object-cover"
            />
          </div>

          <PlaceCard
            label="Santorini"
            title="Santorini"
            img1={img2}
            icon={Icon}
            description="This Cyclades island in the Aegean Sea looks like a place straight out of a fairy tale, with candy-colored houses carved into cliffs, sapphire waters, and chalk-white buildings topped with cobalt-blue domes. Roam the peaceful black-sand beaches or stroll the streets of one of Santorini’s charming villages (start at Imerovigli). And no matter where your day takes you, wind it down in beautiful Oia: It’s world-famous for its sunsets, which cycle through a kaleidoscope of colors in their spectacular nightly show."
          />

          <PlaceCard
            label="London"
            title="United Kingdom"
            img1={img3}
            icon={Icon}
            description="From world-class musicals to top attractions, one-of-a-kind tours and family fun, discover plenty of amazing things to do and places to see in London. Explore the city at your own pace by walking or cycling, or take advantage of public transport. The city’s energy means that no two days are the same. Explore historic sites, snap a pic in front of an iconic landmark, eat and drink in exclusive Michelin-starred restaurants, enjoy a pint in a traditional pub, or get lost down winding cobbled streets. When it comes to London, the possibilities are endless. "
          />
        </div>

        {/* RIGHT SIDE (NARROWER) */}
        <div className="flex flex-col gap-8 w-full min-w-0">
          <div className="w-full bg-white rounded-xl p-4">
            <MyCalendar />
          </div>

          <div className="w-full">
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
