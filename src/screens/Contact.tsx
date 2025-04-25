import "./screens.css";
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
            <nav>
              <div className="flex gap-4">
                <a href="https://www.x.com/benaliihsan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/aiyldzz/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                  >
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ali-ihsan-y%C4%B1ld%C4%B1z-7b04a721b/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                  >
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
