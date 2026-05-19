import React from "react";

const News = ({ flag, title, source, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 group hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition cursor-pointer">
      
      {/* FLAG */}
      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
        {flag}
      </div>

      {/* TEXT */}
      <div className="flex-1 min-w-0">
        <h5 className="text-[13px] sm:text-sm font-semibold leading-snug mb-1 line-clamp-2 group-hover:text-[#400097] transition">
          {title}
        </h5>

        <p className="text-[10px] sm:text-[11px] text-gray-500 truncate">
          Source:{" "}
          <span className="text-blue-600 hover:underline">
            {source}
          </span>
        </p>
      </div>
    </div>
  </a>
);

const NewsCard = () => {
  const newsItems = [
    {
      code: "gb",
      title: "UK expands Business Visa deadline",
      source: "Gov UK",
      link: "https://www.gov.uk/browse/visas-immigration",
    },
    {
      code: "us",
      title: "USA Ease Entry Rule for Health Tourists",
      source: "Travel State Gov",
      link: "https://travel.state.gov/",
    },
    {
      code: "ca",
      title: "Canada Tightens Work Permit Rules",
      source: "IRCC",
      link: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    },
    {
      code: "au",
      title: "Australia Ban Multiple Access Route",
      source: "Australian Government",
      link: "https://immi.homeaffairs.gov.au/",
    },
    {
      code: "fr",
      title: "France Introduction E-visa Regime in Africa",
      source: "France Visas",
      link: "https://france-visas.gouv.fr/",
    },
    {
      code: "de",
      title: "Germany Now Requires Compulsory UV",
      source: "DAAD",
      link: "https://www.daad.de/en/",
    },
    {
      code: "ie",
      title: "Ireland Ban Visa on Arrival for Africans",
      source: "Irish Immigration",
      link: "https://www.irishimmigration.ie/",
    },
    {
      code: "es",
      title: "Spain Launch New Visa Regime for NG",
      source: "Spain Visa",
      link: "https://www.exteriores.gob.es/",
    },
  ];

  return (
    <div className="w-full max-w-[380px] lg:max-w-none bg-white p-4 sm:p-5 rounded-xl shadow">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h4 className="font-semibold sm:font-bold text-base sm:text-lg text-gray-800">
          Alert and News
        </h4>

        <button className="text-[11px] sm:text-xs text-gray-500 hover:text-[#400097] hover:underline transition">
          See All
        </button>
      </div>

      {/* NEWS LIST */}
      <div className="space-y-3 sm:space-y-4 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-1 sm:pr-2">
        {newsItems.map((item, index) => (
          <News
            key={index}
            flag={
              <img
                src={`https://flagcdn.com/${item.code}.svg`}
                alt={item.code}
                className="w-5 h-4 sm:w-6 sm:h-4 object-cover rounded-sm"
              />
            }
            title={item.title}
            source={item.source}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCard;