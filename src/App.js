import './App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faSass, faJsSquare, faBootstrap, faReact, faNode, faNpm, faGitAlt, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function App() {
  const navLinks = [
    {
      link: "#top",
      text: "Home"
    }, {
      link: "#about",
      text: "About"
    }, {
      link: "#skills",
      text: "Skills"
    }, {
      link: "#portfolio",
      text: "Portfolio"
    }, {
      link: "#contact",
      text: "Contact"
    }
  ];
  const skills = [
    {
      name: "HTML",
      icon: faHtml5
    }, {
      name: "CSS",
      icon: faCss3Alt
    }, {
      name: "SCSS",
      icon: faSass
    }, {
      name: "JavaScript",
      icon: faJsSquare
    }, {
      name: "Bootstrap",
      icon: faBootstrap
    }, {
      name: "React",
      icon: faReact
    }, {
      name: "Node.js",
      icon: faNode
    }, {
      name: "npm",
      icon: faNpm
    }, {
      name: "Git",
      icon: faGitAlt
    }, {
      name: "Command Line",
      icon: faTerminal
    }
  ];
  /* const portfolio = [
    {
      title: "eBay app automation",
      text: [
        "Android eBay app automation script.",
        "Uses Selenium and Appium."
      ],
      links: [
        "https://github.com/nobelharvards/eBayAppAutomation"
      ]
    }, {
      title: "Blue dress purchase automation",
      text: [
        "Selenium script for buying a blue dress at <a href=\"http://automationpractice.com\">AutomationPractice.com</a>."
      ],
      links: [
        "https://github.com/nobelharvards/UIAutomationAssignment"
      ]
    }, {
      title: "QBE insurance quote automation",
      text: [
        "Selenium script for getting an anonymous NSW green slip quote at <a href=\"https://qbe.com/au\">QBE Australia</a>."
      ],
      links: [
        "https://github.com/nobelharvards/QBEautomation"
      ]
    }, {
      title: "Morse code translator",
      text: [
        "Translates English to Morse and Morse to English. Also allows custom delimiters."
      ],
      links: [
        "https://github.com/nobelharvards/morse-code-translator"
      ]
    }
  ]; */
  const footerIcons = [
    {
      link: "https://www.linkedin.com/in/nobelharvards",
      icon: faLinkedin
    }, {
      link: "https://github.com/nobelharvards",
      icon: faGithubSquare
    }
  ];
  return (
    <Container>
      <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
        <Nav>
          {navLinks.map(navLink =>
            <Nav.Link href={navLink.link}>
              {navLink.text}
            </Nav.Link>)}
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
            Most recent stack: HTML, CSS, SCSS, JavaScript, React, Node.js and Firebase.
          </p>
        </div>
        <div id="skills" class="section section--skills">
          <h1 class="heading heading--center heading--skills">
            Skills
          </h1>
          <Row>
            {skills.map(skill =>
              <Col xs="12" sm="6" md="4" lg="3">
                <FontAwesomeIcon size="10x" icon={skill.icon}/>
                <p>{skill.name}</p>
              </Col>
            )}
          </Row>
        </div>
        <div id="portfolio" class="section section--portfolio">
          <h1 class="heading heading--center heading--portfolio">
              Portfolio
          </h1>
          <Row>
          <CardDeck>
            {/* portfolio.map(project =>
              <Col xs="12" sm="6" md="4" lg="3">
                <Card style={{width: "18rem", height: "16rem"}}>
                  <Card.Body style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <Card.Title>{project.title}</Card.Title>
                    {project.text.map(text =>
                      <Card.Text>{text}</Card.Text>
                    )}
                    <a href={project.links[0]}>
                      <Button variant="secondary">GitHub</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ) */}
            <Col xs="12" sm="6" md="4" lg="3">
              <Card style={{width: "18rem", height: "16rem"}}>
                <Card.Body style={{display: "flex", flexDirection: "column"}}>
                  <Card.Title>OMDb API movie search</Card.Title>
                  <Card.Text>Uses OMDb API to search for movies.</Card.Text>
                  <div style={{display: "flex", justifyContent: "space-between", marginTop: "auto"}}>
                    <a href="https://github.com/nobelharvards/OMDb-API">
                      <Button variant="outline-secondary">GitHub</Button>
                    </a>
                    <a href="/OMDb-API">
                      <Button variant="outline-primary">App</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card style={{width: "18rem", height: "16rem"}}>
                <Card.Body style={{display: "flex", flexDirection: "column"}}>
                  <Card.Title>Morse code translator</Card.Title>
                  <Card.Text>Translates English to Morse and Morse to English. Also allows custom delimiters.</Card.Text>
                  <div style={{display: "flex", justifyContent: "space-between", marginTop: "auto"}}>
                    <a href="https://github.com/nobelharvards/morse-code-translator">
                      <Button variant="outline-secondary">GitHub</Button>
                    </a>
                    <a href="/morse-code-translator">
                      <Button variant="outline-primary">App</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card style={{width: "18rem", height: "16rem"}}>
                <Card.Body style={{display: "flex", flexDirection: "column"}}>
                  <Card.Title>QBE insurance quote automation</Card.Title>
                  <Card.Text>Selenium script for getting an anonymous NSW green slip quote at <a href="https://qbe.com/au">QBE Australia</a>.</Card.Text>
                  <a href="https://github.com/nobelharvards/QBEautomation" style={{marginTop: "auto"}}>
                    <Button variant="outline-secondary">GitHub</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card style={{width: "18rem", height: "16rem"}}>
                <Card.Body style={{display: "flex", flexDirection: "column"}}>
                  <Card.Title>eBay app automation</Card.Title>
                  <Card.Text>Android eBay app automation script.</Card.Text>
                  <Card.Text>Uses Selenium and Appium.</Card.Text>
                  <a href="https://github.com/nobelharvards/eBayAppAutomation" style={{marginTop: "auto"}}>
                    <Button variant="outline-secondary">GitHub</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              <Card style={{width: "18rem", height: "16rem"}}>
                <Card.Body style={{display: "flex", flexDirection: "column"}}>
                  <Card.Title>Blue dress purchase automation</Card.Title>
                  <Card.Text>Selenium script for buying a blue dress at <a href="http://automationpractice.com">AutomationPractice.com</a>.</Card.Text>
                  <a href="https://github.com/nobelharvards/UIAutomationAssignment" style={{marginTop: "auto"}}>
                    <Button variant="outline-secondary">GitHub</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            </CardDeck>
          </Row>
        </div>
        <div id="contact" class="section section--contact">
          <h1 class="heading heading--center heading--contact">
              Contact
          </h1>
          <div class="contact--center">
            {footerIcons.map(icon =>
              <a href={icon.link} style={{margin: "0 0.5%"}}>
                <FontAwesomeIcon size="5x" icon={icon.icon}/>
              </a>
            )}
            <p id="copyright">© 2021{/* -{new Date().getFullYear()} */} Nobel Harvards</p>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default App;
