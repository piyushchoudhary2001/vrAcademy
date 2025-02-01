'use client';

import { CustomImage } from '../Components/image'
import Link from 'next/link';


const Card2 = () => {
  const cardData = [
    {
      id: 2,
      title: "DSA Mastery",
      info:[
        "Course Fees: 4999/- only",
      ],
      description: [
        "Comprehensive DSA Curriculum - Step-by-step guidance on mastering core Data Structures",
        "Interactive Learning Modules - Hands-on coding challenges to reinforce learning.",
        "Live Problem-Solving Sessions - Focus on understanding and analyzing time and space complexities.",
        "Personalized Mentorship - Tailored learning plans based on individual strengths",
        "Progress Tracking - Milestone-based achievements to keep you motivated.",
      ],
      list: "129+ Students enrolled",
      author: "Code Latent Team",
      date: "February 15",
      image: "/dsacourse.jpg",
      designation: "Course Info",
    },
  ];

  return (
    <div className="p-4 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-3xl mx-auto pb-10">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300"
          >
            {/* Updated to use next/image */}
            <CustomImage
              src={card.image}
              alt={card.title}
              width={500}
              height={300}
              className="w-full h-49 object-contain bg-gray-100"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                {card.designation}
              </p>
              <h2 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h2>
              <ul className="list-none mb-5">
                {card.description.map((point, index) => (
                  <li
                    key={index}
                    className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="list-none mb-5">
                {card.info}
              </ul>
              <div className="flex items-center gap-2 mb-7">
               
                <CustomImage
                  src="/people.png"
                  alt={card.list}
                  width={16}
                  height={16}
                />
                <div>
                  <p className="text-black">{card.list}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Author image */}
                <CustomImage
                  src="/code-lint-jpg-logo.jpg"
                  alt={card.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-gray-800 font-medium">{card.author}</p>
                  <p className="text-sm text-gray-500">{card.date}</p>
                </div>

                {/* Action button */}
                <Link href="https://codelatent.fermion.app/course">
                <button
                  className="absolute bottom-4 right-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black hover:border-black hover:border-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                >
                  Enroll Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
