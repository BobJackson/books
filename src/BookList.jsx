import {Col, Image, Row} from "react-bootstrap";
import React from "react";

class BookList extends React.Component{

    render() {
        const covers = [
            {"id": "1", "cover": "https://salttiger.com/wp-content/uploads/2020/12/1-7.jpg"},
            {"id": "2", "cover": "https://salttiger.com/wp-content/uploads/2019/03/1-5.jpg"},
            {"id": "3", "cover": "https://salttiger.com/wp-content/uploads/2021/12/1-21.jpg"},
        ];

        let books = covers.map((item) => {
            return (
                <Col className="BookContainer hvr-shrink" key={item.id}>
                    <Image src={item.cover} key={item.id}/>
                </Col>
            )
        });

        return (
            <Row className="mt-2">
                {books}
            </Row>
        );
    }
}

export default BookList;