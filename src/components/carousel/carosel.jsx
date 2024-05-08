// const profile2 = "https://s.rfi.fr/media/display/194f0206-1575-11ea-8f32-005056a99247/w:980/p:16x9/2016-12-19t112734z_2080148604_rc1356b21600_rtrmadp_3_congo-politics_0.jpg";
// const profile3 = "https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1256,height=628,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2021/12/08/jad20211208-gf-rdcongo-kinshasa-environnement-1256x628-1643820430.jpg";
// const profile4 = "https://splashmedia.cc/wp-content/uploads/2023/07/visiter-Kinshasa.jpg";

import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://s.rfi.fr/media/display/194f0206-1575-11ea-8f32-005056a99247/w:980/p:16x9/2016-12-19t112734z_2080148604_rc1356b21600_rtrmadp_3_congo-politics_0.jpg',
    'https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1256,height=628,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2021/12/08/jad20211208-gf-rdcongo-kinshasa-environnement-1256x628-1643820430.jpg',
    'https://splashmedia.cc/wp-content/uploads/2023/07/visiter-Kinshasa.jpg',
    'https://splashmedia.cc/wp-content/uploads/2023/07/visiter-Kinshasa.jpg',
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="w-[50rem] mx-auto">
        <div className="h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${images[currentIndex]})` }} />
        <div className="flex justify-center mt-4 gap-4">
          {images.slice(1).map((image, index) => (
            <div
              key={index}
              className="w-[200px] h-[150px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentIndex(index + 1)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center"> 
        <div className="mx-4 my-8 w-full max-w-md"> 
            <div className="flex items-center p-4"> 
                <img src="https://splashmedia.cc/wp-content/uploads/2023/07/visiter-Kinshasa.jpg" alt="Avatar" className="h-16 w-16 rounded-full mr-4" /> 
                <div> 
                    <h3 className="font-bold">John Doe</h3>
                    <div className="text-gray-500"> 
                        <a href="https://www.google.com" className="hover:underline">Application</a> | <a href="https://www.facebook.com" className="hover:underline">GitHub</a> | <a href="https://www.facebook.com" className="hover:underline">Figma</a>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, neque.</p>
                </div> 
            </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
