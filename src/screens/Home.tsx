import Icon from "../components/icon";
import { Link } from "react-router";
import "./screens.css";
const Home = () => {
  return (
    <div className="p-16 gap-1">
      <BannerTerminal />
      <div className="py-16">
        <p className="text-4xl">Ben Kimim ?</p>
        <Info></Info>
      </div>
      <div className="py-16">
        <p className="text-4xl">İçinde Bulunduğum Projeler</p>
        <div className="py-12">
          <Projects></Projects>
        </div>
      </div>
      <div className="py-16 flex flex-row justify-center items-centers">
        <Link to={"/contact"} className="text-7xl">
          Benimle İletişme Geç!
        </Link>
        <p>Tıkla</p>
      </div>
    </div>
  );
};

const BannerTerminal = () => {
  return (
    <div>
      {/* Termnal Kısmı */}
      <div className="mockup-code w-full bg-gray-800">
        <pre data-prefix="" className="">
          <code></code>
        </pre>
        <pre data-prefix="" className="">
          <code></code>
        </pre>
        <pre data-prefix="1">
          <code>Merhaba!</code>
        </pre>
        <pre data-prefix="" className="">
          <code></code>
        </pre>
        <pre data-prefix="2">
          <code>aiyldz Web Sitesi </code>
        </pre>
        <pre data-prefix="" className="">
          <code></code>
        </pre>
        <pre data-prefix="3" className="">
          <code>aiyldz@web % npm run dev</code>
        </pre>
        <pre data-prefix="" className="">
          <code></code>
        </pre>
        <pre data-prefix=">" className="bg-success text-warning-content">
          <code>web Succses Hoş Geldiniz ! :)</code>
        </pre>
        <pre data-prefix="" className="">
          <code></code>
        </pre>
        <pre data-prefix="" className="">
          <code></code>
        </pre>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div>
      <div className="pt-8 flex flex-row">
        <Link to={"/about"} className="h-yazi">
          <img
            className="w-48 h-48 rounded-xl"
            src="src/assets/steak2.webp"
            alt="Steak"
          />
        </Link>

        <div className="py-8 px-8">
          <p className="text-[36px]">Ali ihsan Yıldız</p>
          <p className="text-[16px] ">Front-end Developer</p>
          <p className="text-[24px] w-250">
            Küçüklüğümden beri yaratmaya ve keşfetmeye meraklıyım.
            Yaratıcılığımı yazılım bilgimle harmanlayarak yeni tarifler
            pişiriyorum.
          </p>
          <div className="py-4">
            <Icon></Icon>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-row justify-center gap-32">
      <Project></Project>
      <Project></Project>
      <Project></Project>
    </div>
  );
};
const Project = () => {
  return (
    <div className="p-8 h-100 w-75">
      <img
        className="h-30 w-65"
        src="https://koruparkevleri.com/img/tlogo.png"
        alt=""
      />
      <hr className="mt-2 project"></hr>
      <div className="">
        <h1>Korupark Evleri Web Sitesi</h1>
        <h2>2023</h2>
        <p>
          Asp.net kullanılarak yapılımış bir web sitesi tasarım kısmında yer
          aldıktan sonra yazılımcı ile yaşaşan aksaklıktan dolayı web sitesini
          hataları düzeltme işlemlerinde buludum.
        </p>
        <div className="inline-grid *:[grid-area:1/1]">
          <div className="status status-succes animate-ping"></div>
          <div className="status status-accent"></div>
        </div>
        <a href="https://koruparkevleri.com" className="px-1">
          Online
        </a>
      </div>
    </div>
  );
};

export default Home;
