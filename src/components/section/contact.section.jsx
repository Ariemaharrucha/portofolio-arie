import { MdOutlineEmail } from "react-icons/md";

export const ContactSection = () => {
  return (
    <section className="bg-red-500 md:py-20 py-10" id="contact">
      <div className="container mx-auto md:flex px-8 md:px-0 items-center justify-around">
        <div className="md:w-2/4 w-full text-pretty" data-aos="fade-right">
          <h4 className="text-white ">Contact me</h4>
          <h2 className="text-white md:text-6xl mt-3">
            Let&apos;s Discuss About Your Project
          </h2>
          <button className="py-4 md:py-4 px-4 md:px-8 bg-white rounded-md font-medium mt-8 flex items-center gap-3 ">
            Get It Touch <MdOutlineEmail size={25} />{" "}
          </button>
        </div>
        <div className="w-2/6 rounded-xl overflow-hidden border-8 border-white hidden md:block" data-aos="fade-left">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-people-working-marketing_23-2150417386.jpg?t=st=1729250953~exp=1729254553~hmac=cb22e43f969977b9062e766bc30ae75f5756e77a3f070323d1c6532ca204cd89&w=740"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
