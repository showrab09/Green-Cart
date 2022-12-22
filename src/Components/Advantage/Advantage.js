import React from 'react';
import { Accordion } from 'react-bootstrap';

const Advantage = () => {
  return (
    <div>
      <h2 className="fs-1 fw-bold text-primary my-2 ">Why shop from us ?</h2>
      <div className="row d-flex justify-content-center align-items-center  mx-auto">
        <div className="col-lg-6 my-4">
          <img className="w-75 h-75 img-fluid " src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80" alt="" />
        </div>
        <div className="col-lg-6 my-4">
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>How old do I have to be to join Fitness?</Accordion.Header>
              <Accordion.Body>
                To join you must be 16 years old and above. We will only entertain members under 16 if they are obese, are under doctor advisement and take up personal training. All membership agreements for children under 16 years of age need to be authorised and signed by a legal guardian.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How much is membership at Fitness First?</Accordion.Header>
              <Accordion.Body>
                Membership rates vary depending on the type of package that is best suited for you. Please contact your preferred Fitness First club where our staff will be happy to discuss the various membership options available.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Can I freeze my membership because I cannot attend the club at the moment?</Accordion.Header>
              <Accordion.Body>
                At Fitness First, we believe that exercise is a lifelong habit. That is why when it comes to freezing of your membership, it will only be for medical reasons or outstation/overseas assignments for more than 2 weeks with written notice. For further information, please contact our Front Of House.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Advantage;