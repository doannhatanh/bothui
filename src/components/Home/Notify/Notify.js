import React from 'react';
import './Notify.css';
import Aux from '../../../hoc/Axu';
import Name from './Name/Name';
import Icon from './Icon/Icon';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const notify = (props) => (
    <Aux>
        <div className="Notify">
            <Name name="Nhật Anh"/>
            <Icon icon={faHeart} color="#f0394d"/>
            <Name name="Luly Ánh"/>
        </div>
    </Aux>
)

export default notify;