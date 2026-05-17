import React from "react";

const News = ({ flag, title, source }) => (
  <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 group hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg transition-colors">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
      {flag}
    </div>
    <div className="flex-1 min-w-0">
      <h5 className="text-sm font-bold leading-snug mb-1 truncate">{title}</h5>
      <p className="text-[11px] text-gray-500">
        Source: <span className="text-blue-600 hover:underline">{source}</span>
      </p>
    </div>
  </div>
);

const NewsCard = () => {
  const newsItems = [
    { 
      code: "gb", 
      title: "UK expands Business Visa deadline", 
      source: "https://www.websites.com/2019/01/06/USAFaseEnews",
    },
    { 
      code: "us", 
      title: "USA Ease Entry Rule for Health Tourists", 
      source: "The Indian Times",
    },
    { 
      code: "ca", 
      title: "Canada Tightens Work Permit Rules", 
      source: "https://ircc.org/"
    },
    { 
      code: "au", 
      title: "Australia Ban Multiple Access Route", 
      source: "https://minsha.gov.au"
    },
    { 
      code: "fr", 
      title: "France Introduction E-visa Regime in Africa", 
      source: "https://france-visas.gouv.fr/student"
    },
    { 
      code: "de", 
      title: "Germany Now Requires Compulsory UV", 
      source: "https://www.daad.de/"
    },
    { 
      code: "ie", 
      title: "Ireland Ban Visa on Arrival for Africans", 
      source: "https://www.eban.com/"
    },
    { 
      code: "es", 
      title: "Spain Launch New Visa Regime for NG", 
      source: "https://www.sunrise.com/"
    },
  ];

  return (
    <div 
      className="
        bg-white p-6 border border-[0.4px] border-gray-100 
        w-[368px] h-[496px] rounded-xl opacity-100
      "
      style={{
        position: "absolute",
        top: "550px",
        left: "1105px",
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-lg text-gray-800">Alert and News</h4>
        <button className="text-xs text-gray-500 hover:underline font-medium">
          See All
        </button>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {newsItems.map((item, index) => (
          <News 
            key={index}
            flag={
              <img 
                src={`https://flagcdn.com/${item.code}.svg`} 
                alt={`${item.code} flag`}
                className="w-6 h-4 object-cover rounded-sm shadow-sm" 
              />
            }
            title={item.title}
            source={item.source}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
