import { ProfileForm } from "./ui/contactform";
import {
  SiGithub,
  SiLinkedin,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

function Contact() {
  return (
    <div
      className="mt-32 2xl:mx-96 md:mx-60 sm:mx-40 mx-3 flex flex-col justify-center text-center"
      style={{ height: "80vh" }}
    >
      <div id="contact-section-title" className="my-24">
        <h1 className="text-2xl 2xl:text-3xl font-bold">Contact</h1>
      </div>
      <div className="flex-col lg:flex lg:flex-row justify-center">
        <div id="contact-form" className="lg:mr-36 mb-10">
          <ProfileForm />
        </div>
        <div id="social-buttons-contact-section" className="text-center">
          <h2>Or reach out to me on Social Media</h2>
          <div className="flex mt-6 justify-evenly pb-32 md:pb-0 lg:pb-0 2xl:pb-0">
            <a
              href="https://github.com/fredrikborgstein"
              className="mx-3"
              target="_blank"
            >
              <SiGithub size={36} className="text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/fredrikborgstein/"
              className="mx-3"
              target="_blank"
            >
              <SiLinkedin size={36} className="text-blue" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLay5XBcHhXQ9OvrS5YxpHQ"
              className="mx-3"
              target="_blank"
            >
              <SiYoutube size={40} className="text-red" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
