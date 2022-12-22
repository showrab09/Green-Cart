import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Card, Col } from 'react-bootstrap';


const ServiceDetails = () => {
    const { sname } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/data.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const found = service.find(sr => sr.name === sname);
    if (found) {
        var { name, img, des, price, type } = found;
    }



    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="my-4">
            <h1 className="my-3  text-success fs-2 fw-bold">Detail Info on {name} </h1>
            <img className="w-25 h-25 mb-4" src={img} alt="" />

            <p className="w-50">{des} </p>
            <h4 className="text-danger">Payment: {price} INR </h4>
            <p>Product Type : {type}</p>
            <Button variant="warning" size="lg">Add to Cart</Button>

        </div>
    );
};

export default ServiceDetails;