import React from "react";

const Img = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 ${className || ""}`}
    loading="lazy"
  />
);

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-lavender-2 rounded-2xl p-6 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[400px] lg:min-h-[460px] 
                        transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Shop Everything<br />
            Sell Anything<br />
            One Marketplace
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl p-2 md:p-4 tracking-[0.25em] md:tracking-[0.35em] text-gray-600 mt-6 md:mt-8 uppercase">
            just for you
          </p>
        </div>

        <div className="grid gap-6">
          <div className="rounded-2xl overflow-hidden w-full h-56 sm:h-64 md:h-80 lg:h-[360px] group transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <Img
              src="https://m.media-amazon.com/images/I/41vf2JjwJMS.jpg"
              alt="Wireless mic gear"
            />
          </div>

          <div className="rounded-2xl bg-lavender min-h-[200px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[310px] p-6 md:p-10 grid place-items-center
                          transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">Turn</p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">Ideas</p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">Digital</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-2xl overflow-hidden h-40 sm:h-48 md:h-56 lg:h-[220px] group 
                          transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <Img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1460&auto=format&fit=crop"
              alt="Code on monitor"
            />
          </div>

          <div className="rounded-2xl overflow-hidden h-40 sm:h-48 md:h-56 lg:h-[220px] group 
                          transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <Img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop"
              alt="Desk with keyboard and notebook"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-auto sm:h-40 md:h-48 lg:h-[220px]">
            <div className="rounded-2xl bg-lavender-2 p-6 md:p-8 grid place-items-center
                            transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
              <div className="text-center space-y-1">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold">Create</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold">Your</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold">Future</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden group 
                            transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
              <Img
                src="https://images.pexels.com/photos/28948225/pexels-photo-28948225/free-photo-of-hand-holding-e-reader-displaying-text-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Hands holding an e-reader"
                className="h-40 sm:h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
