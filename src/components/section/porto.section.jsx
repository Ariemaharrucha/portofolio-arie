import { project } from "../../constant/project.jsx";
import { Card } from "../ui/card.jsx";

export const PortofolioSection = () => {
  return (
    <section className="container mx-auto  py-20" id="Project">
      <div className="mb-8">
        <h3 className="text-center text-red-500 font-semibold">Portofolio</h3>
      </div>
      <div className="flex gap-6  justify-center flex-wrap ">
      {Object.values(project).map((porto, index) => {
          return (
            <Card
              title={porto.title}
              key={index}
              image={porto.image}
              stack={porto.stack}
              desc={porto.description}
              url={porto.url}
            />
          );
        })}
      </div>
    </section>
  );
};
