import {Col, Image, Row} from "react-bootstrap";
import React from "react";

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            covers: []
        };
    }

    componentDidMount() {
        fetch("http://host.docker.internal:8080/api/v1/books")
            .then((data) => data.json())
            .then(data => this.setState({covers: data.data}))
            .catch(console.error);
    }

    render() {
        let books = this.state.covers.map((item) => {
            return (
                <Col className="BookContainer hvr-shrink mt-2" key={item.id}>
                    <Image src={item.cover} key={item.id} rounded={true}/>
                </Col>
            )
        });

        return (
            <Row className="mt-2" md={3} lg={4}>
                {books}
            </Row>
        );
    }
}

export default BookList;