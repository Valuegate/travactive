import Student from "./StudentCard.png";
import Traveller from "./TravelerCard.png";
import News from "./NewsFeed.png";
import AI from "./AICard.png";
import Icon from "./Icon.png";
import Icon2 from "./Icon2.png";
import Icon3 from "./Icon3.png";
import CardGrad from "./CardGrad.png";
import CardBag from "./CardBag.png";
import CardAI from "./CardAI.png";
import CardArrow from "./CardArrow.png";
import Frame1 from "./Frame1.png";
import Frame2 from "./Frame2.png";



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


export const testimonialData = [
{
title: "⭐ Student Traveler",
text:
"Travactiv made planning my study trips so simple. Instead of searching everywhere, I now get clear visa details and helpful travel tips in one place.",
name: "Sarah M.",
role: "International Student",
img: Frame2,
},
{
title: "⭐ Frequent Traveler",
text:
"This platform saves me so much time. I quickly find reliable travel guides, visa information, and important updates that make every trip easier.",
name: "David K.",
role: "Frequent Traveler",
img: Frame1,
},
{
title: "⭐ Graduate Student",
text:
"Planning research trips used to be stressful, but Travactiv gives me organized details and useful recommendations that help me travel confidently.",
name: "Anita O.",
role: "Graduate Student",
img: Frame2,
},
{
title: "⭐ Digital Nomad",
text:
"As a digital nomad, I need reliable info fast. Travactiv provides everything I need in one place, helping me stay prepared wherever I work.",
name: "John P.",
role: "Digital Nomad",
img: Frame1,
},
];










export const travelCards = [
  {
    img: Student,
    title: "Real-time Travel Alerts",
    desc: "Get AI-curated updates on scholarships, study-abroad policies, visa requirements, and global travel advisories, helping you make smarter, faster, and more confident decisions no matter where your journey takes you.",
    btn: "Learn more",
    icon: CardGrad,
    borderColor: "#C6F91C", // example color
  },
  {
    img: Traveller,
    title: "Study-Abroad Guidance",
    desc: "Access real-time travel advisories, immigration updates, and cost-of-living insights worldwide—powered by AI to keep you informed, prepared, and confident as you navigate opportunities across borders.",
    btn: "Explore",
    icon: CardBag,
    borderColor: "#03B5AA", // different color
  },
  {
    img: News,
    title: "Local Insights",
    desc: "Stay ahead with AI-verified travel news and emerging trends, sourced from trusted global authorities, so you never miss critical updates that shape your journeys, studies, or relocation plans. Up-to-date news.",
    btn: "Open",
    icon: CardArrow,
    borderColor: "#FF8552", // another color
  },
  {
    img: AI,
    title: "Planner & Checklists",
    desc: "Compare essential travel information across destinations and receive simplified, AI-driven recommendations—helping you cut through the noise and make smarter, more confident travel decisions every time.",
    btn: "Start",
    icon: CardAI,
    borderColor: "#FFD600", // different color
  },
];
