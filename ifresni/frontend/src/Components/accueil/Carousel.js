import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import img from '../images/img.jpg'
// import imgg from '../images/imgg.png'


const CarouselImg = () => {
    return (
        <div>
            <Carousel>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://i.pinimg.com/736x/3b/ff/68/3bff68aa36a146754495241c829f827a.jpg'
      alt="Third slide"
      style ={{
        height: '300px'
      }}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/736x/3b/ff/68/3bff68aa36a146754495241c829f827a.jpg"
      alt="Third slide"
      style ={{
        height: '300px'
      }}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CarouselImg