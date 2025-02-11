import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SocialMediaButtons } from "../ui/social.media.buttons.jsx";
import hero from '../../assets/hero.png'

export const HeroSection = () => {
  return (
    <>
      {/* heroes */}
      <section className="container lg:mx-auto p-8 grid grid-cols-2 items-center text-pretty  overflow-hidden">
        <div className="md:col-span-1 col-span-2 space-y-6">
          <h2 className="font-semibold text-orange-500">WEB Developer</h2>
          <h1 className="font-semibold md:text-7xl text-5xl">Hello 👋️ I am</h1> 
          <h1 className="font-semibold md:text-7xl text-4xl">Arie maharrucha Zakka</h1>
          <p className="text-balance text-lg md:text-base">
            Building responsive and intuitive web applications with the latest technology to help clients achieve their goals.
          </p>
        </div>
        <div className="md:col-span-1 col-span-2 py-4 md:py-0 flex justify-between items-center overflow-hidden ">
          <div className="overflow-hidden hidden md:block" data-aos="fade-left">
            <img
              src={hero}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex md:flex-col gap-3">
            <SocialMediaButtons>
              <a href="https://www.linkedin.com/in/arie-maharrucha-zakka-4a4b29303/" target="_blank">
              <FaLinkedin size={22} />
              </a>
            </SocialMediaButtons>
            <SocialMediaButtons>
              <a href="https://www.facebook.com/ari.maharuka.33/" target="_blank">
              <FaFacebookF size={22} />
              </a>
            </SocialMediaButtons>
            <SocialMediaButtons>
              <a href="https://www.instagram.com/arie_m.z/" target="_blank">
              <FaInstagram size={22} />
              </a>
            </SocialMediaButtons>
          </div>
        </div>
      </section>
    </>
  );
};
