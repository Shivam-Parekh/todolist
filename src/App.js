import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <button>Create a note</button>
          </Row>
          <Row>
            <Col>
              <li>
                <div className="Note-Item New">
                  <p>HELLO HERE</p>
                </div>
                <div className="Note-Item New">
                  <p>HELLO HERE 2</p>
                </div>
              </li>
            </Col>
            <Col>
              <li>
                <div className="Note-Item Complete">
                  <p>HELLO HERE</p>
                </div>
                <div className="Note-Item Complete">
                  <p>HELLO HERE 2</p>
                </div>
              </li>
            </Col>
            <Col>
              <li>
                <div className="Note-Item Complete">
                  <p>HELLO HERE</p>
                </div>
                <div className="Note-Item Complete">
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
