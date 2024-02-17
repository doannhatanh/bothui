import React, { useEffect } from 'react';
import './Home.css';
import Notify from './Notify/Notify';
import GetMarried from './GetMarried/GetMarried';
import ClockLove from './CountDown/CountDown';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
        Aos.refresh();
    }, []); 

    return (
        <div className="Home" data-aos="fade-right">
             <Notify/>
             <ClockLove targetDate={new Date('2023-8-14')}/>
        </div>
    )
}

export default Home;