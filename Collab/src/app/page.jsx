'use client';

import { CustomImage } from '../Components/image'
import Card from "../Components/Card";
import Instructors from "../Components/Instuctors";
import Card2 from "../Components/Card2";
const Home = () => {

  return (
    <div className="inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy md:mt-10">
      <div className="relative isolate px-6 pt-14 lg:px-8 lg:pb-[15vh] pb-3">
        <div className="mx-auto max-w h-auto flex flex-col items-center justify-around md:flex-row gap-20 mt-20">
          <div className="text-center items-center">
            <h1 className="text-3xl font-bold text-white mb-2 animate-title">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Welcome to the
              </span>
            </h1>
            <h1 className="text-4xl font-bold text-white mb-6 animate-title">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Codelatent x VR Academics
              </span>
            </h1>
            <p className="mt-2 text-lg font-medium text-blue-200 mb-8 max-w-2xl animate-fade-in">
              {`VR Academics is offering a fast-track crash course tailored specifically for 12th CBSE students aiming to master accounting concepts in a short time. Designed to help students understand core accounting principles quickly, this course focuses on key topics from the CBSE curriculum, ensuring that students are well-prepared for their board exams. Combining the robust curriculum of Codelatent with the immersive technology of VR Academics, we aim to take your learning to the next level.`}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              
            </div>
          </div>
          <div className="flex items-center justify-center h-auto max-w-2xl text-blue-200">
            <CustomImage src="/collab.svg" alt="Programming" width={400} height={300} />
          </div>
        </div>
      </div>
      <Card/>
      <Card2/>
      <Instructors/>
    </div>
  );
};

export default Home;
