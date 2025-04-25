import Icon from "./icon";
const Footer = () => {
  return (
    <footer>
      <footer className="footer footer-horizontal footer-center text-primary-content p-10">
        <aside>
          <p className="text-3xl">
            aiyldz
            <br />
            LLC
          </p>
          <p className="text-2xl">
            cooked by aiyldz © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
        <Icon></Icon>
      </footer>
    </footer>
  );
};

export default Footer;
