import { Typewriter } from 'react-simple-typewriter';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';

const BestOffer = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl mb-12 mt-[100px]">
            <Typewriter
                    words={['We Offer the best']}
                    loop={2}
                    
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                />
                
                </h1>

            <div>
                <img src="" alt="" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className='flex justify-center items-center gap-6'>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-bold">Various Adventures</h1>
                        <p>Embark on a myriad of thrilling escapades with Various Adventures! Our platform offers a diverse array of exhilarating experiences tailored to satisfy every adventurers craving.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-bold">Adventurous Trails</h1>
                        <p>Explore stunning landscapes, encounter diverse wildlife, and challenge your limits as you traverse our carefully selected routes. </p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-bold">Trained Guides</h1>
                        <p>From navigating unfamiliar terrain to uncovering hidden gems, our trained guides ensure every step of your adventure is filled with discovery and delight.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <div>
                        <img src={image4} alt="" />
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-bold">Family Trips</h1>
                        <p>Create unforgettable memories with our Family Trips package! Tailored for families seeking adventure, relaxation, and quality time together, our carefully curated itineraries promise fun-filled experiences for all ages. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestOffer;