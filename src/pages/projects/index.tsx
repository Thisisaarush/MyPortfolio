import React from "react";
import Link from "next/link";
import Head from "next/head";

const projectsData = [
  {
    title: "MyBees.com",
    codeTitle: "AbInbev",
    liveLink: "https://mybeesapp.com/",
    githubLink: "https://www.ab-inbev.com/",
  },
  {
    title: "Shoez Store",
    codeTitle: "Source Code",
    liveLink: "https://shoez-store.vercel.app/",
    githubLink: "https://github.com/Thisisaarush/ShoezStore",
  },
  {
    title: "Clothing Store",
    codeTitle: "Source Code",
    liveLink: "https://thisisaarush.github.io/Clothing-Store-Website/",
    githubLink: "https://github.com/Thisisaarush/Clothing-Store-Website",
  },
  {
    title: "Weather App",
    codeTitle: "Source Code",
    liveLink: "https://wheyther.vercel.app/",
    githubLink: "https://github.com/Thisisaarush/Weather-App",
  },
  {
    title: "Task App",
    codeTitle: "Source Code",
    liveLink: "https://tada-app.vercel.app/",
    githubLink: "https://github.com/Thisisaarush/Tada",
  },
  {
    title: "Gaming Heaven",
    codeTitle: "Source Code",
    liveLink: "https://thisisaarush.github.io/GameHeaven/",
    githubLink: "https://github.com/Thisisaarush/GameHeaven",
  },
  {
    title: "AI Face Recog.",
    codeTitle: "Source Code",
    liveLink: "https://github.com/Thisisaarush/CelebFaceRecognitionAiReactApp",
    githubLink:
      "https://github.com/Thisisaarush/CelebFaceRecognitionAiReactApp",
  },
  {
    title: "Math Sprint Game",
    codeTitle: "Source Code",
    liveLink: "https://thisisaarush.github.io/MathSprintGame/",
    githubLink: "https://github.com/Thisisaarush/MathSprintGame",
  },
  {
    title: "Twitter UI Clone",
    codeTitle: "Source Code",
    liveLink: "https://thisisaarush.github.io/twitter-clone/",
    githubLink: "https://github.com/Thisisaarush/twitter-clone",
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Aarush Tanwar - Projects</title>
        <meta
          name="description"
          content="Full Stack Developer, Designer Portfolio - Aarush Tanwar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-36 min-h-screen">
        <span className="uppercase cursor-default font-black text-9xl md:text-[200px] lg:text-[300px] m-auto text-gray-100 text-center flex justify-center items-center">
          projects
        </span>

        <div className="uppercase flex flex-col sm:flex-row max-w-5xl m-auto gap-6 px-4 py-16">
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
              className="text-base mt-10 w-fit py-2 px-4 border rounded-md hover:bg-black hover:text-white focus:bg-white focus:text-black  hover:underline-offset-4 transition-all font-semibold duration-150 ease-out"
            >
              Explore more
            </Link>
          </div>
        </div>

        <div className="max-w-5xl m-auto mt-16 flex flex-col text-xl">
          {projectsData.map(
            ({ title, codeTitle, liveLink, githubLink }, index) => (
              <div className="flex hover:bg-gray-100 border-b" key={index}>
                <Link
                  href={liveLink}
                  target="_blank"
                  className="w-1/3 px-8 py-4"
                >
                  {title}
                </Link>

                <Link
                  href={githubLink}
                  target="_blank"
                  className="font-extralight hover:underline px-8 py-4"
                >
                  {codeTitle}
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
