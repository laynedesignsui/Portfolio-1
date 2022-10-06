import React from 'react';
import "../styles.css"
import img_semi_circle from '../assets/semi circle.svg'
import img_circle from '../assets/circle.svg'
import img_squiggly from '../assets/squiggly.svg'
import img_triangle from '../assets/triangle.svg'

function Shapes() {
    return (
        <>
        <img src={img_semi_circle} className="shape shape--0"/>
        <img src={img_circle} className="shape shape--1"/>
        <img src={img_squiggly} className="shape shape--2"/>
        <img src={img_triangle} className="shape shape--3"/>
        <img src={img_semi_circle} className="shape shape--4"/>
        <img src={img_circle} className="shape shape--5"/>
        <img src={img_squiggly} className="shape shape--6"/>
        <img src={img_semi_circle} className="shape shape--7"/>
        <img src={img_triangle} className="shape shape--8"/>
        </>
    )
}

export default Shapes;
