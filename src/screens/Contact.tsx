import "./screens.css";
import Icon from "../components/icon.tsx";
const Contact = () => {
  return (
    <div className="p-4">
      <div className="flex flex-row justify-center ">
        <div
          className="basis-1/3
"
        >
          <Telefon></Telefon>
        </div>
        <div
          className="basis-1/2
"
        >
          <div className="">
            <h1 className="text-7xl">Benimle İletişme Geçin!</h1>
            <div className="grid grid-cols-1 row-2 p-4">
              <span className="text-4xl">Mail: </span>
              <a className="text-2xl" href="mailto:info@aiyldz.com">
                info@aiyldz.com
              </a>
              <span className="text-4xl">Telefon:</span>
              <a className="text-2xl" href="tel:+905312384484">
                Aramak için tıkla!
              </a>
            </div>
            <div className="p-4">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <span>Adınız</span>
                  <input
                    type="text"
                    placeholder="Adınız"
                    className="input bg-transparent w-50"
                  ></input>
                </div>
                <div className="flex flex-col w-55">
                  <span>Soyadınız</span>
                  <input
                    type="text"
                    placeholder="Soyadınız"
                    className="input bg-transparent"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col">
                <span>Mail</span>
                <input
                  type="mail"
                  placeholder="ornek@ornek.com"
                  className="input bg-transparent w-110"
                ></input>
                <span>Mesaj</span>
                <input
                  type="text"
                  placeholder="Mesajınız buraya....."
                  className="input bg-transparent w-110 h-30"
                ></input>
              </div>
              <button className="mt-4 cntb justify-center  p-1 px-2">
                Gönder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Telefon = () => {
  return (
    <div>
      <div className="telefo">
        <div className="mockup-phone">
          <div className="mockup-phone-camera" id="phone-camera"></div>
          <div
            className="mockup-phone-display bg-gray-300 text-green-600 grid text-center place-content-center"
            id="phone-display"
          >
            <Icon></Icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
