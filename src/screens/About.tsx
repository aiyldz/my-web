import { Link } from "react-router";
import "./screens.css";
const About = () => {
  return (
    <div>
      <div className="pt-8 flex flex-row justify-center">
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
            2002 yılında İstanbul Kadıköy’de doğdum ve uzun süredir Bursa’da
            yaşıyorum. Küçük yaşlardan itibaren bilgisayarlarla yakından
            ilgileniyorum; bu ilgi zamanla teknolojiye ve yazılıma olan tutkulu
            bir meraka dönüştü. Aynı zamanda uzun yıllar basketbol oynadım ve
            oyun oynamak da kişisel ilgi alanlarım arasında yer alıyor.
          </p>
          <div>
            <div>
              <p className=" text-[28px]">Yetenekler</p>
              <div className="bosluk ">
                <span className="skill mx-2">C#</span>
                <span className="skill">HTML</span>
                <span className="skill mx-2">CSS</span>
                <span className="skill">JS</span>
                <span className="skill mx-2">REACT</span>
                <span className="skill">Wordpress</span>
                <span className="skill mx-2">Photoshop</span>
                <span className="skill">Blender</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <TimeLap></TimeLap>
      </div>
    </div>
  );
};

const TimeLap = () => {
  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end w-60">
            <time className="text-[24px]">2021-2023</time>
            <div className="text-[20px]">Bilgisyar Programcılğı</div>
            Uludağ Üniversitesi Bilgisayar Programcılığı bölümünden mezun oldum.
          </div>
          <hr className="bg-white" />
        </li>
        <li>
          <hr className="bg-white" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10 w-75">
            <time className="text-[24px]">2021-2022</time>
            <div className="text-[20px]">IOC DIŞ TICARET: Web Geliştirici</div>
            Evihtiyaclarim.com & Koruparkevleri.com E-Ticaret web sitelerinin
            tasarımı, geliştirilmesi ve altyapı hazırlığı yapılması. Google Ads
            ve SEO çalışmaları yapılması.Web siteleri görsellerinin tasarımı ve
            düzenlenmesi. işlemleri.
          </div>
          <hr className="bg-white" />
        </li>
        <li>
          <hr className="bg-white" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end w-60">
            <time className="text-[24px]">2022-2024</time>
            <div className="text-[20px]">VR-SCOPE Web Geliştici & 3D</div>
            3D modelleme ve veri görselleştirmesi. Şirketin kurumsal web
            sitesinin tasarımı ve geliştirilmesi. Tanıtım videoları ve
            animasyonlar oluşturma.
          </div>
          <hr className="bg-white" />
        </li>
        <li>
          <hr className="bg-white" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="text-[24px]">2024-Cur</time>
            <div className="text-[20px]">Freelance Front-end Dev</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
