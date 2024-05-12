import { Typewriter } from 'react-simple-typewriter';
import food1 from '../assets/fea-1.jpg'
import food2 from '../assets/fea-2.jpg'
import { GiCheckMark } from "react-icons/gi";

const BestOffer = () => {
    return (
        <div>
            <h1 className="text-center font-slabo font-extrabold text-4xl mb-24 mt-[100px]">
                <Typewriter
                    words={['We Offer the best']}
                    loop={2}

                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                />

            </h1>

            <div className='flex flex-col font-slabo md:flex-row-reverse gap-20 mb-16 justify-around items-center'>
                <div className='w-1/2'>
                    <img src={food1} alt="" />
                </div>
                <div className='w-2/3'>
                    <h1 className='font-bold text-3xl'>Core Features</h1>
                    <p className='mt-4 text-[18px]'>We showcase key attributes, such as Community Food Sharing, Food Waste Reduction, and Support for Food Security. These features underline our commitment to fostering a sustainable food sharing ecosystem within communities. With ExcessEats, individuals and organizations can actively participate in the reduction of food waste and help those facing food insecurity.</p>

                    <div className='flex mt-9'>
                        <span className='mt-2 mr-6'><GiCheckMark /></span>
                        <div>
                            <h1 className='mb-2 font-semibold text-xl'> Community Food Sharing</h1>
                            <p>
                                ExcessEats brings communities together to share surplus food resources, reducing food waste and ensuring that no one goes hungry. Our platform connects individuals, businesses, and organizations, making it easy to share excess food with those in need.
                            </p>
                        </div>
                    </div>
                    <div className='flex mt-9'>
                    <span className='mt-2 mr-6'><GiCheckMark /></span>
                       <div>
                       <h1 className='mb-2 font-semibold text-xl'>Food Waste Reduction</h1>
                        <p>
                            By participating in ExcessEats, you actively contribute to the reduction of food waste. Share your excess food resources with others in your community, and help us make a positive impact by preventing edible food from ending up in landfills.
                        </p>
                       </div>
                    </div>
                    <div className='flex mt-9 '> 
                    <span className='mt-2 mr-6'><GiCheckMark /></span>
                        <div>
                        <h1 className='mb-2 font-semibold text-xl'>Support Food Security</h1>
                        <p>
                            AExcessEats prioritizes food security, ensuring that everyone has access to quality, nutritious food. Join our platform to help us build a sustainable food sharing ecosystem that benefits those facing food insecurity.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className='flex flex-col md:flex-row gap-20 mt-24 mb-16 justify-around items-center'>
                <div className='w-1/2'>
                    <img src={food2} alt="" />
                </div>
                <div className='w-2/3'>
                    <h1 className='font-bold text-3xl'>Our Commitment</h1>
                    <p className='mt-4'>We showcase key attributes, such as Community Food Sharing, Food Waste Reduction, and Support for Food Security. These features underline our commitment to fostering a sustainable food sharing ecosystem within communities. With ExcessEats, individuals and organizations can actively participate in the reduction of food waste and help those facing food insecurity.</p>

                    <div className='flex mt-9'>
                        <span className='mt-2 mr-6'><GiCheckMark /></span>
                        <div>
                            <h1 className='mb-2 font-semibold text-xl'> Community Engagement</h1>
                            <p>
                                ExcessEats brings communities together to share surplus food resources, reducing food waste and ensuring that no one goes hungry. Our platform connects individuals, businesses, and organizations, making it easy to share excess food with those in need.
                            </p>
                        </div>
                    </div>
                    <div className='flex mt-9'>
                    <span className='mt-2 mr-6'><GiCheckMark /></span>
                       <div>
                       <h1 className='mb-2 font-semibold text-xl'>Sustainability</h1>
                        <p>
                            By participating in ExcessEats, you actively contribute to the reduction of food waste. Share your excess food resources with others in your community, and help us make a positive impact by preventing edible food from ending up in landfills.
                        </p>
                       </div>
                    </div>
                    <div className='flex mt-9 '> 
                    <span className='mt-2 mr-6'><GiCheckMark /></span>
                        <div>
                        <h1 className='mb-2 font-semibold text-xl'>User-Friendly Platform</h1>
                        <p>
                            AExcessEats prioritizes food security, ensuring that everyone has access to quality, nutritious food. Join our platform to help us build a sustainable food sharing ecosystem that benefits those facing food insecurity.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
           
            {/* <div>
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
            </div> */}
        </div>
    );
};

export default BestOffer;