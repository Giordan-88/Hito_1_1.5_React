import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <div style={{ position: "relative" }}>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item interval={900}>
          <Image src="/imgs/pizza1.jpg" className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <Image src="/imgs/Pizza_Pineapples.jpg" className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <Image src="/imgs/pizza.jpg" className="carousel-image" />
        </Carousel.Item>
      </Carousel>
      <div className="textContainer">
        <p className="textCarousel">¡Pizzería Mamma Mia!</p>
        <p className="textCarousel2">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </div>
  );
}

export default Header;