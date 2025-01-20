import { project } from "../../constant/project.jsx";
import { Card } from "../ui/card.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const PortofolioSection = () => {
  return (
    <section className="container mx-auto py-20" id="Project">
      <div className="mb-8">
        <h3 className="text-center text-red-500 font-semibold">Portofolio</h3>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000 }}
        className="shadow-none"
      >
        {Object.values(project).map((porto, index) => (
          <SwiperSlide key={index}>
            <Card
              title={porto.title}
              image={porto.image}
              stack={porto.stack}
              desc={porto.description}
              url={porto.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
