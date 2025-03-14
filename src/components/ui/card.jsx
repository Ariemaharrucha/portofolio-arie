export const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, image, stack = [], desc, porto, demo } = props;
  return (
    <div className="md:w-[360px] w-[320px] md:h-[530px] h-[500px] flex flex-col rounded-lg overflow-hidden border-4 border-orange-300">
      <div className="h-[200px] overflow-hidden border-2 ">
        <img src={image} alt="" className="h-full w-full object-cover hover:scale-125 transition-all ease-in " loading="lazy"/>
      </div>
      <div className="flex-grow p-4 space-y-4">
        <h4>{title}</h4>
        <p>
          {desc}
        </p>
      </div>
      <div className="mx-4 my-2 flex gap-4 flex-wrap">
        {stack.map((item, index) => (
          <item.icon className={item.style} size={40} key={index} />
        ))}
      </div>
      <div className="px-2 py-2 flex gap-2 ">
        <a className="px-5 py-3 bg-red-500 block w-full text-center text-white font-semibold rounded-md border-none hover:bg-red-600 transition-all cursor-pointer" href={porto} target="_blank" >
          Repo
        </a>
        <a className="px-5 py-3 bg-red-500 block w-full text-center text-white font-semibold rounded-md border-none hover:bg-red-600 transition-all cursor-pointer" href={demo} target="_blank" >
          Demo
        </a>
      </div>
    </div>
  );
};
