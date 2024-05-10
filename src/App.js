import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <Row>
            <button>Create a note</button>
            <hr
              style={{
                color: 'white',
                backgroundColor: 'blue',
                height: 5
              }}
            />
          </Row>
          <Row>
            <div className="Note-Column">
              <Col>
                <div>
                  <li>
                    <div className="Note-Item New">
                      <p>HELLO HERE</p>
                    </div>
                    <div className="Note-Item New">
                      <p>HELLO HERE 2</p>
                    </div>
                  </li>
                </div>
              </Col>
              <Col>
                <div>
                  <li>
                    <div className="Note-Item Progress">
                      <p>HELLO HERE</p>
                    </div>
                    <div className="Note-Item Progress">
                      <p>HELLO HERE 2</p>
                    </div>
                  </li>
                </div>
              </Col>
              <Col>
                <div>
                  <li>
                    <div className="Note-Item Complete">
                      <p>HELLO HERE</p>
                    </div>
                    <div className="Note-Item Complete">
                      <p>HELLO HERE 2</p>
                    </div>
                  </li>
                </div>
              </Col>
            </div>
          </Row>
        </header>
      </Container>
    </div>
  );
}

export default App;
