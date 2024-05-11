import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <div className="create-note">
              <Button>Create a note</Button>
            </div>
          </Row>
          <Row>
            <Col>
              <li className="li-other">
                <div className="note-item-new">
                  <p>HELLO HERE</p>
                </div>
                <div className="note-item-new">
                  <p>HELLO HERE 2</p>
                </div>
              </li>
            </Col>
            <Col>
              <li className="li-other">
                <div className="note-item-progress">
                  <p>HELLO HERE</p>
                </div>
                <div className="note-item-progress">
                  <p>HELLO HERE 2</p>
                </div>
              </li>
            </Col>
            <Col>
              <li className="li-last">
                <div className="note-item-complete">
                  <p>HELLO HERE</p>
                </div>
                <div className="note-item-complete">
                  <p>HELLO HERE 2</p>
                </div>
              </li>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
