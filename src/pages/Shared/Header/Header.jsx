
import banner5 from '../../../assets/bd.jpg';
import banner6 from '../../../assets/af.jpg';
import banner7 from '../../../assets/mala.jpg';
// import banner8 from '../../../assets/south.jpg';
import banner9 from '../../../assets/thai.jpg';
import 'animate.css';

const Header = () => {
    return (


        <div className='rounded-lg' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${banner9})`, backgroundRepeat:"no-repeat", backgroundSize:"100%" }}>
            <div className="carousel w-full lg:h-[500px]" >
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-20">
                        <div className="space-y-5 flex-1 animate__animated animate__backInDown ">
                            <h1 className="text-2xl lg:text-6xl font bold text-white mt-10">Enjoy Your day</h1>
                            <p className='text-white'>Embark on a journey of discovery with our comprehensive tourism website, designed to ignite your sense of wanderlust and fulfill your travel dreams. From awe-inspiring natural wonders to rich cultural heritage, we invite you to delve into a world of endless possibilities. Whether you seek serene beaches, or tranquil countryside escapes, our platform is your gateway to immersive exploration</p>
                        </div>
                        <div className="flex-1 ">
                            <img src={banner7} className="w-full border-2 border-[#F9A51A] rounded-3xl h-[300px]" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-20">
                        <div className="space-y-5 flex-1">
                            <h1 className="text-2xl lg:text-6xl text-white font bold">Enjoy Your day</h1>
                            <p className='text-white'>Embark on a journey of discovery with our comprehensive tourism website, designed to ignite your sense of wanderlust and fulfill your travel dreams. From awe-inspiring natural wonders to rich cultural heritage, we invite you to delve into a world of endless possibilities. Whether you seek serene beaches, or tranquil countryside escapes, our platform is your gateway to immersive exploration</p>
                        </div>
                        <div className="flex-1">
                            <img src={banner6} className="w-full border-2 border-[#F9A51A] rounded-3xl" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-20">
                        <div className="space-y-5 flex-1">
                            <h1 className="text-2xl lg:text-6xl text-white font bold">Enjoy Your day</h1>
                            <p className='text-white'>Embark on a journey of discovery with our comprehensive tourism website, designed to ignite your sense of wanderlust and fulfill your travel dreams. From awe-inspiring natural wonders to rich cultural heritage, we invite you to delve into a world of endless possibilities. Whether you seek serene beaches, or tranquil countryside escapes, our platform is your gateway to immersive exploration</p>
                        </div>
                        <div className="flex-1">
                            <img src={banner5} className="w-full border-2 border-[#F9A51A] rounded-3xl h-[300px]" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default Header;
