import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { SocialMediaButtons } from "../ui/social.media.buttons.jsx";

export const HeroSection = () => {
  return (
    <>
      {/* heroes */}
      <section className="container mx-auto grid grid-cols-2 items-center text-pretty h-screen overflow-hidden">
        <div className="col-span-1 space-y-6">
          <h2 className="font-semibold text-orange-500">WEB Developer</h2>
          <h1 className="font-semibold text-7xl">Hello 👋️ I am</h1>
          <h1 className="font-semibold text-7xl">Arie maharrucha</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fuga,
            possimus dolorum molestiae corporis esse tenetur eius
          </p>
          <button className="px-5 py-3 bg-red-500 text-white font-semibold rounded-md border-none">
            Browse Projects
          </button>
        </div>
        <div className="col-span-1 flex justify-between items-center overflow-hidden ">
          <div className="overflow-hidden">
            <img
              src="https://img.freepik.com/free-psd/3d-nft-icon-digital-artist-male_629802-8.jpg?t=st=1729233912~exp=1729237512~hmac=2219279ed7e89d689c0eb487a4c55f8714276e70e57f06dbd65fefa588133931&w=740"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <SocialMediaButtons>
              <FaFacebookF size={22} />
            </SocialMediaButtons>
            <SocialMediaButtons>
              <FaTwitter size={22} />
            </SocialMediaButtons>
            <SocialMediaButtons>
              <FaInstagram size={22} />
            </SocialMediaButtons>
            <SocialMediaButtons>
              <FaPinterestP size={22} />
            </SocialMediaButtons>
          </div>
        </div>
      </section>
    </>
  );
};
