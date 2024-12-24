// import React from 'react';
// import './style.css';

// const featuresData = [
//   {
//     id: 1,
//     title: 'Abstract Design',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perferendis eaque dolore repellat numquam. Dolores.',
//     icon: '📐',
//   },
//   {
//     id: 2,
//     title: 'Modern Design',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perferendis eaque dolore repellat numquam. Dolores.',
//     icon: '🖥️',
//   },
//   {
//     id: 3,
//     title: 'Creative Design',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perferendis eaque dolore repellat numquam. Dolores.',
//     icon: '🎨',
//   },
//   {
//     id: 4,
//     title: 'Responsive Design',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perferendis eaque dolore repellat numquam. Dolores.',
//     icon: '📱',
//   },
//   {
//     id: 5,
//     title: 'Intuitive Design',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perferendis eaque dolore repellat numquam. Dolores.',
//     icon: '🧩',
//   },
//   {
//     id: 6,
//     title: 'Innovative Design',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perferendis eaque dolore repellat numquam. Dolores.',
//     icon: '💡',
//   },
// ];

// export default function Features() {
//   return (
//     <div className="About-bg py-10" id="features">
//       <h1 className="text-8xl text-white font-bold text-center">Features</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//         {featuresData.map(({ id, title, description, icon }) => (
//           <div
//             key={id}
//             className="card relative bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-md rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-lg"
//             aria-labelledby={`feature-title-${id}`}
//           >
//             <div className="card__body">
//               <div className="card__icon text-4xl mb-4">{icon}</div>
//               <p
//                 id={`feature-title-${id}`}
//                 className="card__title text-2xl font-bold hover:text-blue-300 transition-colors relative z-10 text-white"
//               >
//                 {title}
//               </p>
//               <p className="card__paragraph text-white relative z-10">
//                 {description}
//               </p>
//             </div>
//             {/* Add a subtle background overlay to make the text stand out more */}
//             <div className="absolute inset-0 bg-black opacity-20 rounded-lg z-0"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./style.css";

const featuresData = [
  {
    id: 1,
    title: "Offline First AI",
    description:
      "Provides reliable AI support during disasters, working offline in remote or disconnected areas.",
    icon: "🤖",
    link: "#", // Add your desired link here
  },
  {
    id: 2,
    title: "Real-Time Disaster Dashboard",
    description:
      "   Visualizes live weather and disaster data, supporting quick situational assessments and proactive responses.",
    icon: "📈",
    link: "#", // Add your desired link here
  },
  {
    id: 3,
    title: "AI-Driven Resource Allocation",
    description:
      "Allocates resources based on historical disaster patterns, enhancing precision in high-impact response zones.",
    icon: "🎨",
    link: "#", // Add your desired link here
  },
  {
    id: 4,
    title: "Community Disaster Forum",
    description:
      "   Centralizes community support with complaint reporting, discussions, and disaster information sharing for resilience.",
    icon: "👥",
    link: "#", // Add your desired link here
  },
  {
    id: 5,
    title: "Incident Tracking & Playbooks",
    description:
      " Tracks responders’ locations and creates structured playbooks for coordinated, scenario-specific responses.",
    icon: "📝",
    link: "#", // Add your desired link here
  },
  {
    id: 6,
    title: "Predictive Geospatial Mapping",
    description:
      "  Maps disaster impacts and optimizes logistics, improving resource flow and supply chain efficiency.",
    icon: "🌍",
    link: "#", // Add your desired link here
  },
];

export default function Features() {
  return (
    <div className=" py-10" id="features">
      <h1 className="text-5xl text-white font-bold text-center">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {featuresData.map(({ id, title, description, icon, link }) => (
          <div
            key={id}
            className="card relative bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-lg"
            aria-labelledby={`feature-title-${id}`}
          >
            <div className="card__body relative z-20">
              <div className="card__icon text-4xl mb-4">{icon}</div>
              <p
                id={`feature-title-${id}`}
                className="card__title text-2xl font-bold text-white transition-colors"
              >
                {title}
              </p>
              <p className="card__paragraph text-white">{description}</p>
              {/* Explore More Button */}
              <a
                href={link}
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors z-50"
              >
                Explore More
              </a>
            </div>
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-20 rounded-lg z-0 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
