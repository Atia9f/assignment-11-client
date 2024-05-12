import guest1 from '../assets/guest1.jpg';
import guest2 from '../assets/guest2.jpg';
import guest3 from '../assets/guest3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";



AOS.init();

const Guest = () => {

    return (
        <div className='mt-20'>
            <h1 className='text-center font-extrabold text-4xl mt-24 mb-16'>
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
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
                
                <div data-aos="fade-down" className='flex  gap-10 '>
                    <img className='rounded-full w-[100px] h-[100px]' src={guest1} alt="" />
                    <p className='md:mt-10'>I absolutely love ShareBites! Its been a game-changer for me as a busy professional. <br /> I can easily find homemade meals that suit my dietary preferences and <br /> support local cooks in my community. Highly recommend! <br /> <br />
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
                </motion.div>

                <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >

                <div data-aos="fade-up" className='flex gap-10 '>
                    <img className='rounded-full w-[100px] h-[100px]' src={guest2} alt="" />
                    <p className='md:mt-10 '>As a home cook, ShareBites has provided me with an amazing platform to share my passion for cooking with others. The community is so supportive, and its incredibly rewarding to see people enjoy my dishes. Thanks for creating such a wonderful space! <br /> <br />
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
                </motion.div>
                
                <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
                <div data-aos="fade-down" className=' flex gap-10'>
                    <img className='rounded-full w-[100px] h-[100px]' src={guest3} alt="" />
                    <p className='md:mt-10'>What a fantastic concept! ShareBites has made it so easy for me to find homemade meals that cater to my dietary restrictions. Plus, I love the social aspect of connecting with other food enthusiasts in my area. Keep up the great work <br /> <br />
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
                </motion.div>
            </div>

        </div >


    );
};

export default Guest;