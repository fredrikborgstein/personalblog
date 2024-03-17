import {
  SiGithub,
  SiLinkedin,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 bg-stone-700 lg:h-64 bottom-0 left-0 w-full">
      <div id="footer-text" className="text-xl text-white my-4 text-center">
        Feel free to reach out:
      </div>
      <div className="flex flex-row">
        <a
          href="https://github.com/fredrikborgstein"
          className="mx-3"
          target="_blank"
        >
          <SiGithub size={36} className="text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/fredrikborgstein/"
          className="mx-3"
          target="_blank"
        >
          <SiLinkedin size={36} className="text-white" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCLay5XBcHhXQ9OvrS5YxpHQ"
          className="mx-3"
          target="_blank"
        >
          <SiYoutube size={40} className="text-white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
