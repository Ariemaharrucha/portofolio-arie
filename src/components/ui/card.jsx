export const Card = (props) => {
  const {title, image, stack = [], desc, url } = props;
  return (
    <div className="w-[360px] flex flex-col shadow-xl rounded-lg overflow-hidden border-2 border-gray-300">
      <div className="h-[200px] overflow-hidden border-2 ">
        <img src={image} alt="" className="h-full w-full object-cover hover:scale-125 transition-all ease-in " loading="lazy"/>
      </div>
      <div className="flex-1 flex-col p-4 space-y-4">
        <h4>{title}</h4>
        <p>
          {desc}
        </p>
        <div className="flex gap-4 flex-wrap">
          {stack.map((item, index) => (
            <item.icon className={item.style} size={40} key={index} />
          ))}
        </div>
      </div>
      <div className="px-2 py-2 ">
        <a className="px-5 py-3 bg-red-500 block w-full text-center text-white font-semibold rounded-md border-none hover:bg-red-600 transition-all cursor-pointer" href={url} target="_blank" >
          Projects
        </a>
      </div>
    </div>
  );
};
