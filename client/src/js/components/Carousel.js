import React, {useState} from "react";
import {Carousel} from 'react-bootstrap'

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel style={{margin: "1em"}} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/img/Covid.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="blur-background">
            <h4>Covid-19</h4>
            <p>Young people behind spike in COVID-19 numbers, says OPH</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 export default ControlledCarousel;