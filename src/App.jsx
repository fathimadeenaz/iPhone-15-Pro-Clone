import {
  Navbar,
  Hero,
  Highlights,
  Model,
  Features,
  HowItWorks,
  Camera,
  Lens,
  Zoom,
  Gig,
  Battery,
  Safety,
  Env,
  Shop,
  Explore,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Camera />
      <Lens />
      <Zoom />
      <Gig />
      <Battery />
      <Safety />
      <Env />
      <Shop />
      <Explore />
      <Footer />
    </main>
  );
};

export default App;
