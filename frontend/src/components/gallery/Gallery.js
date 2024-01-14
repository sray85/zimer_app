import { React } from "react";
import "./Gallery.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/1147204_15112615170038049837.jpg";
import img2 from "../../assets/images/443c20aa-luxury-indoor-swimming-pool.jpg";
import img3 from "../../assets/images/HPIM3254.JPG";
import img4 from "../../assets/images/shree-balaji-lawns-and.jpg";
import img5 from "../../assets/images/villa-4555824_1280.jpg";
import img6 from "../../assets/images/zexg24jzqn5evzrc0ylp14go6bq3_1590671208_78998036.webp";
import img7 from "../../assets/images/גן-מעוצב-לצימרים.jpg";

const Gallery = () => {
  return (
    <div className="carousel-contanier">
      <Carousel className="carousel slide carousel-fade">
        <Carousel.Item data-bs-interval="200">
          <img alt="" src={img1} className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item data-bs-interval="200">
          <img alt="" src={img2} className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item data-bs-interval="200">
          <img alt="" src={img3} className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item data-bs-interval="200">
          <img alt="" src={img4} className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item data-bs-interval="200">
          <img alt="" src={img5} className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item data-bs-interval="200">
          <img alt="" src={img6} className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item data-bs-interval="200">
          <img alt="" src={img7} className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;
