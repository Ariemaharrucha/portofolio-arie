export const Card = (props) => {
  const {title, url, stack = [], desc } = props;
  return (
    <div className="w-96 flex flex-col shadow-xl rounded-md   overflow-hidden">
      <div className="h-[200px]">
        <img src={url} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex-1 flex-col p-4 space-y-4">
        <h3>{title}</h3>
        <p>
          {desc}
        </p>
        <div className="flex gap-4 flex-wrap">
          {stack.map((item, index) => (
            <item.icon className={item.style} size={40} key={index} />
          ))}
        </div>
      </div>
      <div className="justify-end ">
        <button className="px-5 py-3 bg-red-500 block w-full text-white font-semibold rounded-md border-none hover:bg-red-600 transition-all">
          Projects
        </button>
      </div>
    </div>
  );
};
