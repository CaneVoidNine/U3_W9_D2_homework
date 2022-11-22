import { Jumbotron, Container } from "react-bootstrap";

const Welcome = ({ subtitle }) => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>VoidNine Library</h1>
        <p>{subtitle}</p>
      </Container>
    </Jumbotron>
  );
};
export default Welcome;
