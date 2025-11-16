import Student from "./StudentCard.png";
import Traveller from "./TravelerCard.png";
import News from "./NewsFeed.png";
import AI from "./AICard.png";
import Icon from "./Icon.png";
import Icon2 from "./Icon2.png";
import Icon3 from "./Icon3.png";


export const IconCard = [
 {
  desc: `
    <div class="text-center sm:text-left">
      <h6 class=" font-bold mb-2 text-left" style="color: #023436;">WHY CHOOSE US?</h6>
      <h1 class="font-semibold text-lg leading-[24px] text-gray-900 custom-outline">
        Clear AI-Verified Insights, Not Just Information — Clarity You Can Rely On
      </h1>
      <p class="text-gray-600 mt-3">
        We go beyond overwhelming travel data to deliver clear, AI-verified insights, helping you navigate complex rules and updates with confidence.
      </p>
    </div>
  `,
}


,

  {
    img: Icon, 
    title: "Interactive Maps & Guides",
    desc: "Stay assured with AI-verified updates from credible global sources—no rumors, just facts that matter for your journey.",
  },  

{
  img: Icon2,
  title: "Personalized Itineraries",
  desc: "Whether you’re a student exploring study-abroad opportunities or a global explorer seeking advisories, we’ve built tools just for you.",
},
  {
    img: Icon3,
    title: "24/7 Virtual Travel Assistant",
    desc: "We cut through the complexity of visas, travel rules, and global updates, giving you clear insights for confident decision-making.",
  },
]











export const travelCards = [
  {
    img: Student,
    title: "Real-time Travel Alerts",
    desc: "Get push-ready updates on entry rules, weather disruptions, and safety advisories for your destination.",
    btn: "Learn more",
  },
  {
    img: Traveller,
    title: "Study-Abroad Guidance",
    desc: "Visa checklists, scholarship trackers and campus-specific rules — tailored for students.",
    btn: "Explore",
  },
  {
    img: News,
    title: "Local Insights",
    desc: "Discover timely tips from locals, transport updates and curated neighborhood guides.",
    btn: "Open",
  },
  {
    img: AI,
    title: "Planner & Checklists",
    desc: "Interactive packing lists and timelines so you're ready well before departure day.",
    btn: "Start",
  },
];