const Projects = () => {
  return (
    <div>
      <div className="px-48 py-12">
        <h1 className="text-4xl">İçinde bulunduğum projeler</h1>
      </div>
      <div className="flex flex-row justify-center gap-32">
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>
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

export default Projects;
