
import banner1 from '../../../assets/b1.jpg';
import banner2 from '../../../assets/b2.jpg';
import banner3 from '../../../assets/b3.jpg';

import 'animate.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Header = () => {
    return (



        <Slide
            autoplay={true}
            onChange={function noRefCheck() { }}
            onStartChange={function noRefCheck() { }}
        >
            <div className="each-slide-effect rounded-2xl">
                <div
                   style={{
                    backgroundImage: ` url(${banner1})`,  backgroundSize: 'cover',
                    backgroundPosition: 'center', height: '70vh', borderRadius: '16px'
                }}
                >
                    <div>
                    <div className=' pt-24 pl-24 text-white'>
                       <h1 className='font-extrabold text-4xl'> Join to ShareBites <br /> to share foods</h1> 
                       <p className='mt-6'>Welcome to ShareBites, your go-to platform for sharing and discovering <br /> delicious homemade meals within your community.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div
                     style={{
                        backgroundImage: ` url(${banner2})`,  backgroundSize: 'cover',
                        backgroundPosition: 'center', height: '70vh', borderRadius: '16px'
                    }}
                >
                    <div className=' pt-24 pl-24 text-white'>
                       <h1 className='font-extrabold text-4xl'> Join to ShareBites <br /> to share foods</h1> 
                       <p className='mt-6'>Welcome to ShareBites, your go-to platform for sharing and discovering <br /> delicious homemade meals within your community.</p>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div
                    style={{
                        backgroundImage: ` url(${banner3})`,  backgroundSize: 'cover',
                        backgroundPosition: 'center', height: '70vh', borderRadius: '16px'
                    }}
                >
                     <div className=' pt-24 pl-24 text-white'>
                       <h1 className='font-extrabold text-4xl'> Join to ShareBites <br /> to share foods</h1> 
                       <p className='mt-6'>Welcome to ShareBites, your go-to platform for sharing and discovering <br /> delicious homemade meals within your community.</p>
                    </div>
                </div>
            </div>
        </Slide>

    );
};

export default Header;
