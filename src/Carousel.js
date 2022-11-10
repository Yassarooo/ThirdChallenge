import React, { useEffect, useState } from "react";
import "./Carousel.css"; //will be added later
import { faArrowRight, faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

const Carousel = (props) => {
  const { children } = props;
  const [currenttranslate, setCurrenttranslate] = useState(
    -10 + (Math.floor(children.length / 2) - 1) * -40
  );
  const [currentIndex, setCurrentIndex] = useState(children.length / 2);
  const [length, setLength] = useState(children.length);
  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrenttranslate(currenttranslate - 40);
      console.log(currenttranslate);
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrenttranslate(currenttranslate + 40);
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content-wrapper">
        <div
          className="carousel-content"
          style={{
            transform: `translateX(${currenttranslate}%)`,
          }}
        >
          {children}
        </div>
      </div>
      <Container className="btnContainer py-4">
        {/* You can alwas change the content of the button to other things */}
        <button onClick={prev} className="left-arrow me-2">
          <FontAwesomeIcon size="sm" icon={faArrowLeft} />
        </button>
        {/* You can alwas change the content of the button to other things */}
        <button onClick={next} className="right-arrow ms-2">
          <FontAwesomeIcon size="sm" icon={faArrowRight} />
        </button>
      </Container>
    </div>
  );
};

export default Carousel;
