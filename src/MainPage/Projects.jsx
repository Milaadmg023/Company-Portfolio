import React from "react";
import { Carousel } from "@material-tailwind/react";

function Projects() {
  return (
    <section>
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div>
          <img
            src="https://thumbs.wbm.im/pw/medium/5791b45ce85ba3119d1fbbc9a50817c4.avif"
            alt="image 1"
            className="h-[70vh] w-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://thumbs.wbm.im/pw/medium/7c1ff5ca32e3dc3c2bd8c2b643109241.avif"
            alt="image 2"
            className="h-[70vh] w-full object-cover"
          />
        </div>
        <div className="h-[70vh] w-full object-cover bg-cover bg-center bg-no-repeat bg-[url('https://thumbs.wbm.im/pw/medium/50759fc4df1f1cd19459529f5aa38af6.avif')]">
          {/*<img
            src="https://thumbs.wbm.im/pw/medium/50759fc4df1f1cd19459529f5aa38af6.avif"
            alt="image 3"
            className="h-[70vh] w-full object-cover"
              />*/}
          <span className="bg-gray-900 text-white">
            hello
          </span>
        </div>
      </Carousel>
    </section>
  );
}

export default Projects;
