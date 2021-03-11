import React from 'react';
import Image from '../Conditional/male.png';
import img from '../Conditional/female.png';

const Conditional = (props) => {
        const gender =props.gender;
        console.log(gender)
        let changeImage = gender ? <img src={Image} alt=""/> : <img src={img} alt=""/>
         return (
        <div>
            {changeImage}
        </div>
    );
};

export default Conditional;