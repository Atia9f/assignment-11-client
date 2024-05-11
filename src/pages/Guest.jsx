import guest1 from '../assets/guest1.jpg';
import guest2 from '../assets/guest2.jpg';
import guest3 from '../assets/guest3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter';



AOS.init();

const Guest = () => {

    return (
        <div className='mt-20'>
            <h1 className='text-center font-bold text-3xl'>
                <Typewriter
                    words={['Guest Reviews']}
                    loop={2}
                    
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                />
                </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
                <div data-aos="fade-down" className='flex  gap-10 '>
                    <img className='rounded-full w-[100px] h-[100px]' src={guest1} alt="" />
                    <p className='md:mt-10'>I was in Italy for the first time and stayed by chance in a winder cottage Monte Bianco. I must say that was an unforgettable experience! <br /> <br />
                        <span className='text-green-500'>
                            <Typewriter
                                words={['― JOE DOE']}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </p>
                </div>
                <div data-aos="fade-up" className='flex gap-10 '>
                    <img className='rounded-full w-[100px] h-[100px]' src={guest2} alt="" />
                    <p className='md:mt-10 '>I’ll never forget our summer stay at villa Emilia! Perfect location, perfect service, amazing nature views. I enjoyed the stay and would recommend it to everyone. Moreover, there are a lot of interesting things to visit and do – fests, food tours, castles tours and much more! <br /> <br />
                        <span className='text-green-500'>
                            <Typewriter
                                words={['― KIM LEE']}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </p>
                </div>
                <div data-aos="fade-down" className=' flex gap-10'>
                    <img className='rounded-full w-[100px] h-[100px]' src={guest3} alt="" />
                    <p className='md:mt-10'>I was visiting Le Marche with my family and friends and stayed at  Etna House – this was an amazing and unforgettable stay! A lot of space, a pool, a beachfront, just a peaceful rest. <br /> <br />
                        <span className='text-green-500'>
                            <Typewriter
                                words={['― TOM HENDRIX']}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Guest;