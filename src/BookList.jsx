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
        let env = process.env.NODE_ENV
        let baseUrl = ''
        if (env === 'development') {
            baseUrl = "http://localhost:8080"
        } else if (env === 'production') {
            baseUrl = "https://books.wangyousong.com"
        }
        console.log(baseUrl);

        fetch(`${baseUrl}/api/books/all`)
            .then((data) => data.json())
            .then(data => this.setState({covers: data.data}))
            .catch(console.error);
    }

    render() {
        let books = this.state.covers
            .filter(item => !this.props.publisher || item.publisher === this.props.publisher)
            .map((item) => {
            return (
                <Col className="BookContainer hvr-shrink mt-2" key={item.id}>
                    <Image src={item.cover} key={item.id} rounded={true} fluid={true}/>
                </Col>
            )
        });

        return (
            <Row className="mt-2 mb-1" md={3} lg={4}>
                {books}
            </Row>
        );
    }
}

export default BookList;