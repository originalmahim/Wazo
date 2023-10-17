
const Banner = () => {
  
          return (
            <div>
            <div className="carousel w-full lg:h-[800px] md:h-[500px] h-[220px]">
            <div
            id="slide1"
            className="carousel-item relative w-full"
            style={{
            backgroundImage: `url('https://i.ibb.co/Lpd3Bts/replicate-prediction-4v2aj7jbbgvzjuia3wmmrworue.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            >
            <div data-aos="fade-right" className="text-white lg:ml-44 md:ml-6 lg:mt-60 -mt-10 md:mt-20 p-20 lg:p-0">
           
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
            backgroundImage: `url('https://i.ibb.co/GRgv7r7/Screenshot-2023-10-17-224143.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            ><div data-aos="fade-right" className="text-white lg:ml-44 md:text-4xl md:ml-6  md:mt-20 -mt-10 lg:mt-60 p-20 lg:p-0">
            
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
            backgroundImage: `url('https://i.ibb.co/HBvbNdF/Screenshot-2023-10-17-222025.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            >
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
            ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
            ❯
            </a>
            </div>
            </div>
            <div
            id="slide4"
            className="carousel-item relative w-full"
            style={{
            backgroundImage: `url('https://i.ibb.co/Qr4pLBD/Screenshot-2023-10-17-222236.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            >
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
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
        