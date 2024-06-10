import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" class="text-slate-50 mr-[15px] flex items-center">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about" className="navbar-dark">Sobre</Nav.Link>
            <Nav.Link href="/contact" className="navbar-dark">Contate-nos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cart" title="Carrinho">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed">
                <path d="M284.53-80.67q-30.86 0-52.7-21.97Q210-124.62 210-155.47q0-30.86 21.98-52.7Q253.95-230 284.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83Zm400 0q-30.86 0-52.7-21.97Q610-124.62 610-155.47q0-30.86 21.98-52.7Q653.95-230 684.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83ZM238.67-734 344-515.33h285.33l120-218.67H238.67ZM206-800.67h589.38q22.98 0 34.97 20.84 11.98 20.83.32 41.83L693.33-490.67q-11 19.34-28.87 30.67-17.87 11.33-39.13 11.33H324l-52 96h487.33V-286H278q-43 0-63-31.83-20-31.84-.33-68.17l60.66-111.33-149.33-316H47.33V-880h121.34L206-800.67Zm138 285.34h285.33H344Z"/>
              </svg>
            </Nav.Link>
            <Nav.Link href="/login" title="Login">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed">
                <path d="M480-480.67q-66 0-109.67-43.66Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67ZM160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17t125.33 15.5q62 15.5 127.28 45.3 30.54 14.42 48.96 41.81Q800-296.67 800-260v100H160Zm66.67-66.67h506.66V-260q0-14.33-8.16-27-8.17-12.67-20.5-19-60.67-29.67-114.34-41.83Q536.67-360 480-360t-111 12.17Q314.67-335.67 254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33ZM480-547.33q37 0 61.83-24.84Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33Zm0-86.67Zm0 407.33Z"/>
              </svg>
            </Nav.Link>
            <Nav.Link href="/order" title="Pedidos">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed">
                <path d="M186.67-662.67v476h586.66v-476H640V-328l-160-80-160 80v-334.67H186.67Zm0 542.67q-27.5 0-47.09-19.58Q120-159.17 120-186.67v-519q0-11.25 3.5-21.7t10.5-19.3l51.33-67.66q9-12 23.13-18.84Q222.59-840 238-840h483.33q15.42 0 29.54 6.83Q765-826.33 774-814.33l52 67.66q7 8.85 10.5 19.3 3.5 10.45 3.5 21.7v519q0 27.5-19.58 47.09Q800.83-120 773.33-120H186.67Zm16.66-609.33H756l-35.61-44H238.67l-35.34 44Zm183.34 66.66V-436L480-482.67 573.33-436v-226.67H386.67Zm-200 0H773.33 186.67Z"/>
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;