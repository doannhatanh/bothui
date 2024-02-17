import React, { useState, useEffect } from 'react';
import './CountDown.css';
import Item from './Item/Item';

const ClockLove = ({ targetDate }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance =  now - targetDate.getTime();
            
            const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);
            
            setDays(daysRemaining);
            setHours(hoursRemaining);
            setMinutes(minutesRemaining);
            setSeconds(secondsRemaining);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div className="CountDown">
            <Item value={days} item="Ngày" delay="0.25s"/>
            <Item value={hours} item="Giờ" delay="0.33s"/>
            <Item value={minutes} item="Phút" delay="0.41s"/>
            <Item value={seconds} item="Giây" delay="0.49s"/>
        </div>
    );
}

export default ClockLove;
