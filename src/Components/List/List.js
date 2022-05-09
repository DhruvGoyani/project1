import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function List({ data }) {
    console.log(data);
    return (
        data.map((d, i) => {
            return (
                <div className='col-3 mt-5'>
                    <Card>
                    <CardBody>
                        <CardTitle>{d.name}</CardTitle>
                        <CardSubtitle>{d.price}</CardSubtitle>
                        <CardText>{d.expiry}</CardText>
                        <Button>order</Button>
                    </CardBody>
                </Card>
                </div>
            )
        })
    );
}

export default List;

