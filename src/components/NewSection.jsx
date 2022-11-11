function NewSection() {
  return (
    <section className="px-3">
      <div className="p-5 bg-slate-900">
        <h2 className="text-yellow-700 text-3xl font-bold">New</h2>
        <div className="py-5 border-b border-gray-500">
          <h3 className="text-white text-xl font-bold mb-2 hover:underline">Hydrogen VS Electric Card</h3>
          <p className="text-gray-500">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="py-5 border-b border-gray-500 mb-2">
          <h3 className="text-white text-xl font-bold hover:underline">The Downsides of AI Artistry</h3>
          <p className="text-gray-500">What are the possible adverse effect of on-demand AI image generation?</p>
        </div>
        <div className="py-5 pb-0">
          <h3 className="text-white text-xl font-bold mb-2 hover:underline">Is VC Funding Drying Up?</h3>
          <p className="text-gray-500 border-gray-500">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
    </section>
  );
}

export default NewSection;
