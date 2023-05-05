import React from 'react'
import {ListGroup,Row,Col} from "react-bootstrap" 
import Images from '../Images'
function Imgcards(props) {
  return (
   <>
          <ListGroup className="mt-3">
        <Row>
    
            <Col>
              <ListGroup.Item className="mt-3 "style={{borderRadius:'10px', border:'0px'}}>
                <Row>
                  <Col>
                    <img
                      src={props.link}
                      alt={Images[0].alt}
                      className="img-fluid"
                      style={{ maxHeight: "400px", width: "500px" }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col  className="d-flex flex-column">
                    <h2 className='text-center mt-5'>{props.name}</h2>
                   

                  </Col>
                </Row>
              </ListGroup.Item>
            </Col>
          
        </Row>
      </ListGroup>
   </>
  )
}

export default Imgcards

