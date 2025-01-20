export const ArticleSection = () => {
  return (
    <section className="container mx-auto md:py-20 py-10 px-8 md:px-0 space-y-10">
      <h3 className="text-center text-red-500 font-medium">My Article</h3>
      <section className="grid grid-cols-12 md:gap-7 gap-4">
        <ArticleCard url={'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        <ArticleCard url={'https://images.unsplash.com/photo-1670057037226-b3d65909424f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
      </section>
      <button className="px-6 md:px-12 py-3 md:py-4 bg-red-500 md:mt-5 mt-3 rounded-md font-medium text-lg text-white mx-auto block hover:bg-red-600">
        Browse
      </button>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const ArticleCard = ({url}) => {
  return (
    <div className="md:col-span-6 col-span-12 bg-red-300 rounded-2xl max-h-[450px] overflow-hidden border-none relative group/item">
      <img
        src={url}
        className="h-full w-full object-cover group-hover/item:brightness-50  transition-all "
        alt=""
        loading="lazy"
      />
      <button className="px-8 py-2.5 bg-slate-200 absolute block right-5 bottom-5 rounded-md font-medium text-lg hover:bg-white invisible group-hover/item:visible transition-all ">
        Read
      </button>
    </div>
  );
};
