import React from 'react'
import { Col, Image } from 'react-bootstrap'

export function Testimonial ({testimonial}) {
  return (
    <>
      <Col md={3} xs={8} className="d-block mx-auto">
        <Image fluid roundedCircle className="d-block mx-auto mb-4" src={testimonial.imageUrl} alt="fill murray 2"/>
          <div className="bg-light border border-secondary rounded">
            <p className="text-center p-2">{testimonial.message}</p>
          </div>
      </Col>
    </>
  )
}