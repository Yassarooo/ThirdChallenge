import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/fontawesome-free-regular";
import { Button, Container, Navbar, Col, Stack } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div>
      <header>
        <Navbar bg="white" expand="lg " className="mx-5 px-5">
          <Container fluid>
            <Navbar.Brand className="">
              <Button
                className="bg-black "
                style={{ borderRadius: 0, width: 50 + `px`, height: 50 + `px` }}
              >
                <FontAwesomeIcon size="xl" icon={faCircle} />
              </Button>
            </Navbar.Brand>
            <Button
              className="justify-content-end bg-black py-2 px-4"
              style={{ borderRadius: 50 }}
            >
              Free Consultation
            </Button>
          </Container>
        </Navbar>
      </header>
      <body className="mx-5 px-5 my-3">
        <Container className="mt-3 text-center">
          <h1 style={{ fontSize: 3.5 + `em`, fontWeight: 700 }}>
            Design solutions made easy
          </h1>
          <p
            className="mt-3"
            style={{
              fontSize: 1.1 + `em`,
              opacity: 0.5,
              fontWeight: 500,
              maxWidth: 70 + `ch`,
              margin: "auto",
            }}
          >
            With over ten years of experience in various design disciplines. I'm
            your one-stop shop for your design needs.
          </p>
        </Container>
        <Container className="d-flex my-5">
          <Col
            className=""
            style={{ backgroundColor: "rgb(117,92,221)", borderRadius: 10 }}
            lg="4"
            md="4"
          >
            <Container
              className="d-flex align-items-end"
              style={{ height: 300 + `px` }}
            >
              <p
                className="text-white px-3 py-1 "
                style={{ fontWeight: 500, fontSize: "larger" }}
              >
                Graphic Design
              </p>
            </Container>
          </Col>
          <Col lg="4" md="4" className="mx-3">
            <Container className="d-flex flex-row" style={{ height: 150 }}>
              <Container
                className="d-flex align-items-end"
                style={{ backgroundColor: `rgb(245,166,97)`, borderRadius: 10 }}
              >
                <p
                  className="text-white px-3 py-1 "
                  style={{ fontWeight: 500, fontSize: "larger" }}
                >
                  UI/UX
                </p>
              </Container>
              <Container
                className="d-flex align-items-end ms-3"
                style={{
                  backgroundColor: `rgb(243,157,159)`,
                  borderRadius: 10,
                }}
              >
                <p
                  className="text-white px-3 py-1 "
                  style={{ fontWeight: 500, fontSize: "larger" }}
                >
                  Apps
                </p>
              </Container>
            </Container>
            <Container className="d-flex flex-row mt-3" style={{ height: 150 }}>
              <Container
                className="d-flex align-items-end  "
                style={{
                  backgroundColor: `rgb(243,157,159)`,
                  borderRadius: 10,
                }}
              >
                <p
                  className="text-white px-3 py-1"
                  style={{ fontWeight: 500, fontSize: "larger" }}
                >
                  Illustrations
                </p>
              </Container>
            </Container>
          </Col>
          <Col lg="4" md="4">
            <Container className="d-flex">
              <Container
                className="d-flex align-items-end"
                style={{
                  height: 150 + `px`,
                  backgroundColor: "rgb(98,196,183)",
                  borderRadius: 10,
                }}
              >
                <p
                  className="text-white px-3 py-1 "
                  style={{
                    fontWeight: 500,
                    fontSize: "larger",
                  }}
                >
                  Photography
                </p>
              </Container>
            </Container>

            <Container className="d-flex mt-3">
              <Container
                className="d-flex align-items-end"
                style={{
                  height: 150 + `px`,
                  backgroundColor: "rgb(86,31,75)",
                  borderRadius: 10,
                }}
              >
                <p
                  className="text-white px-3 py-1 "
                  style={{
                    fontWeight: 500,
                    fontSize: "larger",
                  }}
                >
                  Motion Graphics
                </p>
              </Container>
            </Container>
          </Col>
        </Container>
        <Container className="d-flex flex-row py-5">
          <Container className="d-flex">
            <img src={require("./pp.png")} alt="" />
          </Container>
          <Container className="d-flex py-3">
            <Stack>
              <h1 style={{ fontWeight: 700 }}>
                I'm Amy,and I'd love to work on your next project
              </h1>
              <p
                className="mt-4"
                style={{ fontSize: 1.1 + `em`, opacity: 0.5, fontWeight: 500 }}
              >
                I love working with others to create beautiful design solutions.
                I've designed everything from brand Illustrations to complete
                mobile apps. I'm alsa handy with camera!
              </p>
              <Container fluid className="d-flex p-0 mt-3">
                <Button
                  className="justify-content-end py-3 px-5"
                  style={{
                    border: `transparent`,
                    borderRadius: 50,
                    backgroundColor: `rgb(232,117,99)`,
                  }}
                >
                  Free Consultation
                </Button>
              </Container>
            </Stack>
          </Container>
        </Container>
        <Container className="d-flex text-center my-3">
          <h1 style={{ fontSize: 2 + `em`, fontWeight: 700, margin: `auto` }}>
            My Work
          </h1>
        </Container>
        <Container className="w-50 mt-3">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./pp.png")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./pp.png")}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./pp.png")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </body>
    </div>
  );
}

export default App;
