import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Testimonial } from './Testimonial'

export function Home () {
  return (
    <>
      <Container>
        <div className="p-5 my-5 bg-light rounded">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
            to featured content or information.</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
      </Container>

      <section className="bg-secondary py-5">
        <Container>
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
      </section>

      <Container>
        <Row className="py-5 g-5">
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>
        </Row>
      </Container>




    </>
  )
}