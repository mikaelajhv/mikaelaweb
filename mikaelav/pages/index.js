import Head from 'next/head'
import Image from 'next/image'
import {Nav, Navbar, Container} from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mikaela Valenciano</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo_1.ico"/>
      </Head>

        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="/name.png"
                height="72"
                width="256"
              />
              </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      <section id="home">
        <h1>Hi, I'm Mikaela</h1>

      </section>

      <section id="about">
        <h1>About Me</h1>
      </section>

      <section id="education">
        <h1>Education</h1>
      </section>

      <section id="skills">
        <h1>Skills</h1>
      </section>

    </div>
  )
}
