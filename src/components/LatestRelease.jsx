import { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import books from "../assets/fantasy.json";
import books2 from "../assets/horror.json";
import books3 from "../assets/scifi.json";
import books4 from "../assets/history.json";
import books5 from "../assets/romance.json";
class LatestRelease extends Component {
  render() {
    return (
      <Container>
        <h2>Fantasy books</h2>
        <Carousel interval={99999} className="mb-3 mt-3">
          {books.map((book) => (
            <Carousel.Item key={book.id}>
              <img className="d-block w-100" src={book.img} alt={book.title} />
              <Carousel.Caption>
                <h3 className="capText">{book.title}</h3>
                <p className="capText">Book Price: {book.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <h2>Horror books</h2>
        <Carousel interval={9999} className="mb-3 mt-3">
          {books2.map((book2) => (
            <Carousel.Item key={book2.id}>
              <img
                className="d-block w-100"
                src={book2.img}
                alt={book2.title}
              />
              <Carousel.Caption>
                <h3 className="capText">{book2.title}</h3>
                <p className="capText">Book Price: {book2.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <h2>Sci-fi books</h2>
        <Carousel interval={9999} className="mb-3 mt-3">
          {books3.map((book3) => (
            <Carousel.Item key={book3.id}>
              <img
                className="d-block w-100"
                src={book3.img}
                alt={book3.title}
              />
              <Carousel.Caption>
                <h3 className="capText">{book3.title}</h3>
                <p className="capText">Book Price: {book3.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <h2>History books </h2>
        <Carousel interval={9999} className="mb-3 mt-3">
          {books4.map((book4) => (
            <Carousel.Item key={book4.id}>
              <img
                className="d-block w-100"
                src={book4.img}
                alt={book4.title}
              />
              <Carousel.Caption>
                <h3 className="capText">{book4.title}</h3>
                <p className="capText">Book Price: {book4.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <h2>Romance books </h2>
        <Carousel interval={9999} className="mb-3 mt-3">
          {books5.map((book5) => (
            <Carousel.Item key={book5.id}>
              <img
                className="d-block w-100"
                src={book5.img}
                alt={book5.title}
              />
              <Carousel.Caption>
                <h3 className="capText">{book5.title}</h3>
                <p className="capText">Book Price: {book5.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default LatestRelease;
