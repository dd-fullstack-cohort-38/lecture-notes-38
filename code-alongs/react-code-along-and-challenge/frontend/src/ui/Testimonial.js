import React from 'react'
import { Col, Image } from 'react-bootstrap'

export function Testimonial () {
  return (
    <>
      <Col md={3} xs={8} className="d-block mx-auto">
        <Image fluid roundedCircle className="d-block mx-auto mb-4" src="http://www.fillmurray.com/250/250"
             alt="fill murray 2"/>
          <div className="bg-light border border-secondary rounded">
            <p className="text-center p-2">Yeah well, I saw it on a rerun. Okay, but I don't know what to say. Doc, you
              don't just walk into a store and ask for plutonium. Did you rip this off? I'm writing this down, this is
              good stuff. You heard her she said get your meat hooks, off, uh please.</p>
          </div>
      </Col>
    </>
  )
}