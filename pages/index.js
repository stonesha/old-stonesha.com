
import Container from '@/components/Container';
import FunctionCard from '@/components/FunctionCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Stone Sha (WIP)
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer, guitar player, and video game player. I use this website personally to
          keep organized about the things I'm passionate about. Feel free to keep scrolling or browse
          and stay a while.
        </h2>

        <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">

          <FunctionCard
          key={"monke"}
          title={"Monke Bot"}
          link={"https://github.com/stonesha/monke-bot"}
          logo={"python.png"}
          description={"Discord Bot that sends funny message and can identify images."}
          >
          </FunctionCard>

          <FunctionCard
          key={"bee-mobile"}
          title={"Bee Mobile"}
          slug={"https://github.com/stonesha/bee-mobile"}
          logo={"flutter.png"}
          description={"Mobile Application for Bettering Emergency Evacuations (BEE)"}
          >
          </FunctionCard>

          <FunctionCard
          key={"bee-webserver"}
          title={"Bee Webserver"}
          slug={"https://github.com/stonesha/bee-webserver"}
          logo={"java.png"}
          description={"Backend Server for Bettering Emergency Evacuations (BEE)"}
          >
          </FunctionCard>

          <FunctionCard
          key={"bee-project"}
          title={"Bee Project"}
          slug={"https://github.com/stonesha/bee-project"}
          logo={"react.png"}
          description={"Web Application for Bettering Emergency Evacuations (BEE)"}
          >
          </FunctionCard>

          <FunctionCard
          key={"blackjack"}
          title={"Blackjack"}
          slug={"https://github.com/stonesha/blackjack"}
          logo={"python.png"}
          description={"Blackjack written in Python with unit testing and DevOps"}
          >
          </FunctionCard>

          <FunctionCard
          key={"pong-clone"}
          title={"Pong Clone"}
          slug={"https://github.com/stonesha/pong-clone"}
          logo={"cpp.png"}
          description={"Pong clone written using SFML and C++"}
          >
          </FunctionCard>

        </div>
      </div>
    </Container>
  )
}
