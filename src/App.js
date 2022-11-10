import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/fontawesome-free-regular";
import { Button, Container, Navbar, Col, Stack } from "react-bootstrap";
import Carousel, { CarouselItem } from "./Carousel";

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
            <img src={require("./images/pp.png")} alt="" />
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
        <div
          style={{
            maxWidth: 2200,
            marginTop: 30,
            height: 400,
          }}
        >
          <Carousel>
            <img src={require("./images/s2.png")} alt="placeholder" />
            <img src={require("./images/s1.png")} alt="placeholder" />
            <img src={require("./images/s3.png")} alt="placeholder" />
            <img src={require("./images/s2.png")} alt="placeholder" />
            <img src={require("./images/s1.png")} alt="placeholder" />
            <img src={require("./images/s3.png")} alt="placeholder" />
            <img src={require("./images/s2.png")} alt="placeholder" />
            <img src={require("./images/s1.png")} alt="placeholder" />
            <img src={require("./images/s3.png")} alt="placeholder" />
          </Carousel>
        </div>
        <Container
          className="d-flex bg-black flex-row my-5 px-5"
          style={{ borderRadius: `15px` }}
        >
          <Col lg="7" md="7">
            <p
              style={{
                paddingTop: `50px`,
                color: `white`,
                fontSize: `2em`,
                fontWeight: 700,
              }}
            >
              Book a call with me
            </p>
            <p
              style={{
                paddingTop: `20px`,
                color: `lightgray`,
                fontSize: `1.1em`,
                fontWeight: 500,
                paddingBottom: `50px`,
              }}
            >
              I'd love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </Col>

          <Container className="d-flex justify-content-center align-items-center ms-4">
            <Button
              className="px-4 py-2 ms-5"
              style={{
                border: `transparent`,
                borderRadius: 50,
                backgroundColor: `rgb(232,117,99)`,
              }}
            >
              Free Consultation
            </Button>
          </Container>
        </Container>
        <Container className="d-flex flex-row m-0">
          <Button
            className="bg-black "
            style={{ borderRadius: 0, width: `50px`, height: 50 + `px` }}
          >
            <FontAwesomeIcon size="xl" icon={faCircle} />
          </Button>
          <Container className="d-flex justify-content-end p-0 m-0">
            <Button
              className="bg-black py-2 px-4 mx-0"
              style={{ borderRadius: 50 }}
            >
              Free Consultation
            </Button>
          </Container>
        </Container>
      </body>
    </div>
  );
}

export default App;
