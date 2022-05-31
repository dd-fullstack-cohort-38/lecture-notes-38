import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

export function AboutPage () {
  return (
    <>
      <Container fluid className={'backgroundImage d-flex container-fluid'}>
        <Row>
          <Col md={2} className={'p-3'}>
            <h1>kasdsjhfkajsdsdfh</h1>
          </Col>
          <Col md={4}  className={'ms-auto d-flex align-items-end justify-content-end'}>
            <p>kjsdhf asdjkfhaksljd jaskdhfkjasdf askjdhfkjasdfh askddjhfkjadsfh askjdhfksjdfh</p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="g-5 py-4">
          <Col md={3}>
            <Image fluid className="d-block mx-auto" src="http://www.fillmurray.com/300/300" alt="fill murray"/>
          </Col>
          <Col md={9} xs={10} className="d-block mx-auto">
            <p>Do you mind if we park for a while? Indeed I will, roll em. I, Doctor Emmett Brown, am about to embark
              on an historic journey. What have I been thinking of, I almost forgot to bring some extra plutonium. How
              did I ever expect to get back, one pallet one trip I must be out of my mind. What is it Einy? Oh my god,
              they found me, I don't know how but they found me. Run for it, Marty. That was so stupid, Grandpa hit
              him with the car. Marty, you didn't fall asleep, did you? Calvin, why do you keep calling me Calvin?</p>
            <p>Will you take care of that? What were you doing in the middle of the street, a kid your age. Alright,
              okay. Alright, there she is, George. Just go in there and invite her. Hello, hello, anybody home? Think,
              McFly, think. I gotta have time to recopy it. Do your realize what would happen if I hand in my homework
              in your handwriting? I'd get kicked out of school. You wouldn't want that to happen would you, would
              you? Marty, why are you so nervous?</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}