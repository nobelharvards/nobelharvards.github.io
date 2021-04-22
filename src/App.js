import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faSass, faJsSquare, faGitAlt, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Container>
      <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
      <Nav>
        <Nav.Link href="#top">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      </Navbar>
      <main>
        <div id="about" class="section section--about">
          <h1 class="heading heading--center heading--about">
            About
          </h1>
          <p>
            Junior software developer looking for a job and to be mentored by more experienced developers. Undertook a <a href="https://au.nology.io/12-week-remote-software-developer-course-_nology-australia/#expanded-info-3">12 week software developer training course</a> at <a href="https://au.nology.io">_nology Australia</a>. Previously worked in software quality engineering and assurance.
          </p>
          <p>
            Current stack: HTML5, CSS, SASS, BEM, JavaScript, Bootstrap and React.
          </p>
        </div>
        <div id="skills" class="section section--skills">
          <h1 class="heading heading--center heading--skills">
            Skills
          </h1>
          <Row>
            <Col xs="12" sm="6" md="4" lg="3">
              <FontAwesomeIcon size="10x" icon={faHtml5}/>
              <p>HTML5</p>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <FontAwesomeIcon size="10x" icon={faCss3Alt}/>
              <p>CSS3</p>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <FontAwesomeIcon size="10x" icon={faSass}/>
              <p>Sass</p>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <FontAwesomeIcon size="10x" icon={faJsSquare}/>
              <p>JavaScript</p>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <FontAwesomeIcon size="10x" icon={faGitAlt}/>
              <p>Git</p>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <FontAwesomeIcon size="10x" icon={faTerminal}/>
              <p>Command Line</p>
            </Col>
          </Row>
        </div>
        <div id="portfolio" class="section section--portfolio">
          <h1 class="heading heading--center heading--portfolio">
              Portfolio
          </h1>
          <div class="row">
            <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{width: "18rem"}}>
              <div class="card-body">
                <h5 class="card-title">eBay app automation</h5>
                <p class="card-text">Android eBay app automation script.</p>
                <p class="card-text">Uses Selenium and Appium.</p>
                <a href="https://github.com/nobelharvards/eBayAppAutomation" class="btn btn-primary">GitHub</a>
              </div>
            </div>
            <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{width: "18rem"}}>
              <div class="card-body">
                <h5 class="card-title">Blue dress purchase automation</h5>
                <p class="card-text">Selenium script for buying a blue dress at <a href="http://automationpractice.com">AutomationPractice.com</a>.</p>
                <a href="https://github.com/nobelharvards/UIAutomationAssignment" class="btn btn-primary">GitHub</a>
              </div>
            </div>
            <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{width: "18rem"}}>
              <div class="card-body">
                <h5 class="card-title">QBE insurance quote automation</h5>
                <p class="card-text">Selenium script for getting an anonymous NSW green slip quote at <a href="https://qbe.com/au">QBE Australia</a>.</p>
                <a href="https://github.com/nobelharvards/QBEautomation" class="btn btn-primary">GitHub</a>
              </div>
            </div>
            <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{width: "18rem"}}>
              <div class="card-body">
                <h5 class="card-title">Morse code translator</h5>
                <p class="card-text">Translates English to Morse and Morse to English. Also allows custom delimiters.</p>
                <a href="https://github.com/nobelharvards/morse-code-translator" class="btn btn-primary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" class="section section--contact">
          <h1 class="heading heading--center heading--contact">
              Contact
          </h1>
          <div class="contact--center">
            <a href="mailto:nobelharvards@gmail.com">
              <FontAwesomeIcon size="5x" icon={faEnvelopeSquare}/>
            </a>
            <a href="https://www.linkedin.com/in/nobelharvards">
              <FontAwesomeIcon size="5x" icon={faLinkedin}/>
            </a>
            <a href="https://github.com/nobelharvards">
              <FontAwesomeIcon size="5x" icon={faGithubSquare}/>
            </a>
            <p id="copyright">Copyright © 2021{/* -{new Date().getFullYear()} */} Nobel Harvards</p>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default App;
