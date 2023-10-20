
const Banner = () => {
  
          return (
            <div>
            <div className="carousel w-full lg:h-[800px] md:h-[500px] h-[220px]">
            <div
            id="slide1"
            className="carousel-item relative w-full"
            style={{
            backgroundImage: `url('https://i.ibb.co/6bxnCfK/Screenshot-2023-10-20-185937.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            >
            <div data-aos="fade-right" className="text-black lg:ml-44 md:ml-6 -ml-3 lg:mt-60 -mt-8 md:mt-20 p-20 lg:p-0">
            <h1 className=" lg:font-bold font-semibold lg:text-7xl md:text-4xl text-xl ">Make Special <br /> Memories For You <br /> With Wazo</h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
            ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
            ❯
            </a>
            </div>
            </div>
            <div
            id="slide2"
            className="carousel-item relative w-full"
            style={{
            backgroundImage: `url('https://i.ibb.co/vDjY2dT/Screenshot-2023-10-20-184309.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            >
              <div data-aos="fade-right" className="text-black lg:ml-44 md:ml-6 -ml-3 lg:mt-60 -mt-8 md:mt-20 p-20 lg:p-0">
            <h1 className=" lg:font-bold font-semibold lg:text-7xl md:text-4xl text-xl ">Cosmetics <br /> Accessories <br /> Everything You  <br /> Need </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
            ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
            ❯
            </a>
            </div>
            </div>
            <div
            id="slide3"
            className="carousel-item relative w-full"
            style={{
            backgroundImage: `url('https://i.ibb.co/LC0g00J/Screenshot-2023-10-20-190913.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            >
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
            ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
            ❯
            </a>
            </div>
            </div>
            </div>
            </div>
          );
        };
        
        export default Banner;
        