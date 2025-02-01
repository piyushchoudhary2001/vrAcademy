'use client';

import { CustomImage } from '../Components/image'
import Link from 'next/link';

const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Crash Course",
      info:[
        "Online: 599/- only || Offline: 849/- only",
      ],
      description: [
        "Guidance - Expert mentors to guide you throughout process",
        "Resources - Access to tools, templates, and learning materials.",
        "Collaboration - Opportunities to work with peers in teams.",
        "Support - Continuous feedback and assistance.",
        "Core Topics Only- Focus on essential concepts that provide maximum value in a short time.",
        "Evaluate Progress - Conduct mini-tests to ensure learners grasp the material."
        
      ],
      list: "87+ Students enrolled",
      author: "VR Academics",
      date: "February 1",
      image: "/crashcourse.jpg",
      designation: "Course Info",
    }
  ];
  return (
    <div className="p-4 bg-white">
      <p className="font-bold text-3xl mb-10 text-center mt-7">Our Courses</p>
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
                  src="/vrlogo.jpg"
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
                <Link href="/redirect">
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

export default Card;
