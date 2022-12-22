import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Member from '../Member/Member';

const Team = () => {
    const [peoples, setPeoples] = useState([]);
    useEffect(()=>{
        fetch('/people.JSON')
        .then(res => res.json())
        .then(data => setPeoples(data))
    },[])
    return (
        <div className="my-3">
            <h2 className="text-primary fs-1 fw-bold">Lets Meet Our Team</h2>
            <Row xs={1} md={3} style={{width:'90%'}} className="p-2 mx-auto">
              {
                  peoples.map(member => <Member member={member}></Member> )
              }
           </Row>
        </div>
    );
};

export default Team;