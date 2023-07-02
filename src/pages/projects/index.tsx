import React from "react";
import Link from "next/link";
import Head from "next/head";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Aarush Tanwar - Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer, Designer Portfolio - Aarush Tanwar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="uppercase mt-36">
        <span className="font-black text-9xl md:text-[200px] lg:text-[300px] m-auto text-gray-100 text-center flex justify-center items-center">
          projects
        </span>

        <div className="flex flex-col sm:flex-row max-w-5xl m-auto gap-6 px-4 py-16">
          <span className="w-1/4 text-xl font-extralight">Achievements</span>

          <div className="flex flex-col text-5xl md:text-7xl">
            <div>
              <span className="font-bold">Projects</span>
              <span className="font-extralight"> - </span>
            </div>
            <span className="font-extralight">Full Stack Web Apps</span>
            <Link
              href="https://github.com/Thisisaarush"
              target="_blank"
              className="text-base mt-10 w-fit py-2 px-4 border rounded-md hover:bg-black hover:text-white focus:bg-white focus:text-black  hover:underline-offset-4 transition-all font-semibold duration-150 ease-in-out"
            >
              Explore more
            </Link>
          </div>
        </div>

        <div className="max-w-5xl m-auto mt-16 flex flex-col text-xl">
          <Link
            href="https://mybeesapp.com/"
            target="_blank"
            className="flex gap-4 border-t py-4 px-6 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
          >
            <span className="font-bold w-1/2 md:w-1/3">MyBees.com</span>
            <div>
              <Link
                href="https://www.ab-inbev.com/"
                target="_blank"
                className="font-extralight hover:underline hover:underline-offset-4"
              >
                Ab Inbev
              </Link>
            </div>
          </Link>
          <Link
            href="https://shoez-store.vercel.app/"
            target="_blank"
            className="flex gap-4 border-t py-4 px-6 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
          >
            <span className="font-bold w-1/2 md:w-1/3">Shoez Store</span>
            <div>
              <Link
                href="https://github.com/Thisisaarush/ShoezStore"
                target="_blank"
                className="font-extralight hover:underline hover:underline-offset-4"
              >
                Source Code
              </Link>
            </div>
          </Link>
          <Link
            href="https://thisisaarush.github.io/Clothing-Store-Website/"
            target="_blank"
            className="flex gap-4 border-t py-4 px-6 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
          >
            <span className="font-bold w-1/2 md:w-1/3">Clothing Store</span>
            <div>
              <Link
                href="https://github.com/Thisisaarush/Clothing-Store-Website"
                target="_blank"
                className="font-extralight hover:underline hover:underline-offset-4"
              >
                Source Code
              </Link>
            </div>
          </Link>
          <Link
            href="https://wheyther.vercel.app/"
            target="_blank"
            className="flex gap-4 border-t py-4 px-6 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
          >
            <span className="font-bold w-1/2 md:w-1/3">Weather App</span>
            <div>
              <Link
                href="https://github.com/Thisisaarush/Weather-App"
                target="_blank"
                className="font-extralight hover:underline hover:underline-offset-4"
              >
                Source Code
              </Link>
            </div>
          </Link>
          <Link
            href="https://tada-app.vercel.app/"
            target="_blank"
            className="flex gap-4 border-t py-4 px-6 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
          >
            <span className="font-bold w-1/2 md:w-1/3">Task App</span>
            <div>
              <Link
                href="https://github.com/Thisisaarush/Tada"
                target="_blank"
                className="font-extralight hover:underline hover:underline-offset-4"
              >
                Source Code
              </Link>
            </div>
          </Link>
          <Link
            href="https://thisisaarush.github.io/GameHeaven/"
            target="_blank"
            className="flex gap-4 border-t py-4 px-6 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
          >
            <span className="font-bold w-1/2 md:w-1/3">Gaming Heaven</span>
            <div>
              <Link
                href="https://github.com/Thisisaarush/GameHeaven"
                target="_blank"
                className="font-extralight hover:underline hover:underline-offset-4"
              >
                Source Code
              </Link>
            </div>
          </Link>
          <Link
            href="https://github.com/Thisisaarush/CelebFaceRecognitionAiReactApp"
            target="_blank"
            className="flex gap-4 border-t py-4 px-6 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
          >
            <span className="font-bold w-1/2 md:w-1/3">AI Face Recog.</span>
            <div>
              <Link
                href="https://github.com/Thisisaarush/CelebFaceRecognitionAiReactApp"
                target="_blank"
                className="font-extralight hover:underline hover:underline-offset-4"
              >
                Source Code
              </Link>
            </div>
          </Link>
          <Link
            href="https://thisisaarush.github.io/MathSprintGame/"
            target="_blank"
            className="flex gap-4 border-t py-4 px-6 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
          >
            <span className="font-bold w-1/2 md:w-1/3">Math Sprint</span>
            <div>
              <Link
                href="https://github.com/Thisisaarush/MathSprintGame"
                target="_blank"
                className="font-extralight hover:underline hover:underline-offset-4"
              >
                Source Code
              </Link>
            </div>
          </Link>
          <Link
            href="https://thisisaarush.github.io/twitter-clone/"
            target="_blank"
            className="flex gap-4 border-t py-4 px-6 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
          >
            <span className="font-bold w-1/2 md:w-1/3">Twitter Clone</span>
            <div>
              <Link
                href="https://github.com/Thisisaarush/twitter-clone"
                target="_blank"
                className="font-extralight hover:underline hover:underline-offset-4"
              >
                Source Code
              </Link>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
