function NewSection() {
  const dataList = [
    { id: 1, title: "Hydrogen VS Electric Card", desc: "Will hydrogen-fueled cars ever catch up to EVs?" },
    { id: 2, title: "The Downsides of AI Artistry", desc: "What are the possible adverse effect of on-demand AI image generation?" },
    { id: 3, title: "Is VC Funding Drying Up?", desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means." },
  ];
  return (
    <section className="px-3 lg:row-span-2">
      <div className="p-5 bg-slate-900 pb-14">
        <h2 className="text-yellow-600 text-3xl font-bold lg:text-5xl mb-3">New</h2>
        <div className="space-y-5">
          {dataList.map((data) => (
            <div key={data.id} className="py-5 border-b border-gray-500 last:border-none last:pb-0">
              <h3 className="text-white text-xl font-bold mb-2 hover:underline hover:text-yellow-600 lg:text-xl">{data.title}</h3>
              <p className="text-gray-500 lg:text-md">{data.desc}</p>
            </div>
          ))}
          ;
        </div>
      </div>
    </section>
  );
}

export default NewSection;
