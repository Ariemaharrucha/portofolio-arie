export const Card = (props) => {
  const { url, stack = [] } = props;
  return (
    <div className="max-w-sm shadow-xl rounded-md  overflow-hidden">
      <div className="h-[200px]">
        <img src={url} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-4 space-y-4 ">
        <h3>Title</h3>
        <p className="h-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores,
          dolore similique laboriosam soluta ea nostrum culpa ex pariatur ab.
        </p>
        <div className="flex gap-4 flex-wrap">
          {stack.map((item, index) => (
            <item.icon className={item.style} size={40} key={index} />
          ))}
        </div>
        <button className="px-5 py-3 bg-red-500 block w-full text-white font-semibold rounded-md border-none hover:bg-red-600 transition-all">
          Projects
        </button>
      </div>
    </div>
  );
};
