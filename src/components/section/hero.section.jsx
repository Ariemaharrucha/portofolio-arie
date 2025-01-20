import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SocialMediaButtons } from "../ui/social.media.buttons.jsx";

export const HeroSection = () => {
  return (
    <>
      {/* heroes */}
      <section className="container mx-auto grid grid-cols-2 items-center text-pretty h-screen overflow-hidden">
        <div className="col-span-1 space-y-6">
          <h2 className="font-semibold text-orange-500">WEB Developere</h2>
          <h1 className="font-semibold text-7xl">Hello 👋️ I am</h1> 
          <h1 className="font-semibold text-7xl">Arie maharrucha</h1>
          <p className="text-balance">
            Building responsive and intuitive web applications with the latest technology to help clients achieve their goals.
          </p>
        </div>
        <div className="col-span-1 flex justify-between items-center overflow-hidden ">
          <div className="overflow-hidden" data-aos="fade-left">
            <img
              src="https://img.freepik.com/free-psd/3d-nft-icon-digital-artist-male_629802-8.jpg?t=st=1729233912~exp=1729237512~hmac=2219279ed7e89d689c0eb487a4c55f8714276e70e57f06dbd65fefa588133931&w=740"
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-3">
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
