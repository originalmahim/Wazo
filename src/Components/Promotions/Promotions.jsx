import  { useState, useEffect, useRef } from 'react';

const Promotions = () => {
  const slides = [
    "https://img.freepik.com/free-vector/black-friday-super-sale-website-banner-with-red-splash_1361-2935.jpg?w=1380&t=st=1697718352~exp=1697718952~hmac=55359038314c7b4ec9740a448c8e26d51412e467b21abeb8a12532cb8bba653a",
    "https://img.freepik.com/free-vector/abstract-big-sale-modern-banner-template_1055-7071.jpg?w=1380&t=st=1697718160~exp=1697718760~hmac=8ddf7f9829d8074bbcb41725f32b0af339603d59a79f907badbb39947f5486e9",
    "https://img.freepik.com/free-vector/black-friday-wide-orange-sale-grunge-banner_1017-34783.jpg?w=1380&t=st=1697718095~exp=1697718695~hmac=aef59de319a5a254a329eddad597977db86a442a4455d44115af6ef2623785d9",
    "https://img.freepik.com/free-vector/black-friday-yellow-banner-with-paper-style_1361-3695.jpg?w=1380&t=st=1697718573~exp=1697719173~hmac=164e14956130ca0f2b80c70b0c01dc3726598276427a8573c93d1005f89e976f"
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const slidesRef = useRef(slides);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((activeSlide + 1) % slidesRef.current.length);
    }, 2000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [activeSlide]);

  return (
          <div className="max-w-7xl mx-auto mb-12">
          <div className="carousel w-full lg:h-52 h-32">
          {slidesRef.current.map((slide, index) => (
          <div
          key={index}
          className={`carousel-item relative w-full ${
          index === activeSlide ? 'active' : ''
          }`}
          style={{
          transform: `translateX(-${activeSlide * 100}%)`,
          transition: 'transform 1s ease-in-out',
          }}
          >
          <img
          src={slide}
          className="w-full h-auto"
          />
          </div>
          ))}
          </div>
          </div>
  );
};

export default Promotions;
