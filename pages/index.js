
import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import TopTracks from '@/components/TopTracks';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-normal text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hi, I'm Stone Sha
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer, guitar player, and video game enthusiast. I use this website personally to
          keep organized about the things I'm passionate about. Feel free to&nbsp;
          <a href={"https://www.linkedin.com/in/stone-sha-2a8040147/"} target="_blank" rel="noopener noreferrer">connect on LinkedIn</a>,&nbsp;
          <a href={"https://github.com/stonesha"} target="_blank" rel="noopener noreferrer">check my GitHub</a>, or stay and browse.
        </h2>

        <h1 className="font-medium text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">

          <ProjectCard
            key={"monke"}
            title={"Monke Bot"}
            link={"https://github.com/stonesha/monke-bot"}
            logo={"python.png"}
            description={"Discord Bot that sends funny message and can identify images."}
          >
          </ProjectCard>

          <ProjectCard
            key={"bee-mobile"}
            title={"Bee Mobile"}
            link={"https://github.com/stonesha/bee-mobile"}
            logo={"flutter.png"}
            description={"Mobile Application for Bettering Emergency Evacuations (BEE)"}
          >
          </ProjectCard>

          <ProjectCard
            key={"bee-webserver"}
            title={"Bee Webserver"}
            link={"https://github.com/stonesha/bee-webserver"}
            logo={"java.png"}
            description={"Backend Server for Bettering Emergency Evacuations (BEE)"}
          >
          </ProjectCard>

          <ProjectCard
            key={"bee-project"}
            title={"Bee Project"}
            link={"https://github.com/stonesha/bee-project"}
            logo={"react.png"}
            description={"Web Application for Bettering Emergency Evacuations (BEE)"}
          >
          </ProjectCard>

          <ProjectCard
            key={"blackjack"}
            title={"Blackjack"}
            link={"https://github.com/stonesha/blackjack"}
            logo={"python.png"}
            description={"Blackjack written in Python with unit testing and DevOps"}
          >
          </ProjectCard>

          <ProjectCard
            key={"pong-clone"}
            title={"Pong Clone"}
            link={"https://github.com/stonesha/pong-clone"}
            logo={"cpp.png"}
            description={"Pong clone written using SFML and C++"}
          >
          </ProjectCard>
        </div>
        <br />

        <h1 className="font-medium text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Top Tracks
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <TopTracks />
        </div>

      </div>
    </Container>
  )
}
