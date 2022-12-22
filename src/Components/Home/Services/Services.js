import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/data.JSON')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return ( 
        <div className="my-3">
            <h2 className="fs-1 fw-bold text-primary">Here is Our Pricing</h2> 
            <div>
            <Row xs={1} md={3} style={{width:'90%'}} className="p-2 mx-auto">
              {
                  services.map(service => <Service service={service}></Service>)
              }
           </Row>
            </div>
        </div>
    );
};

export default Services;