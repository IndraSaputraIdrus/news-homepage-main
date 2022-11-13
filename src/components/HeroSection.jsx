function HeroSection() {
  return (
    <section className="px-3 lg:col-span-2 lg:row-span-2 lg:h-full">
      <img src="/assets/image-web-3-mobile.jpg" className="mb-4 w-full object-cover lg:hidden" />
      <img src="/assets/image-web-3-desktop.jpg" className="mb-4 w-full hidden object-cover lg:block lg:h-1/2" />
      <div className="lg:flex lg:h-1/2">
        <h1 className="text-4xl font-extrabold pr-5 mb-4 lg:w-1/2 lg:text-6xl">The Bright Future of Web 3.0?</h1>
        <div className="lg:w-1/2 lg:pl-[11px]">
          <p className="text-gray-500 mb-5 leading-relaxed lg:mb-14">
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise
          </p>
          <a href="#" className="inline-block bg-red-500 uppercase tracking-widest text-white py-3 px-6 font-bold hover:bg-slate-900 lg:text-white">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
