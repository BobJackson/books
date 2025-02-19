import './App.css';
import 'hover.css/css/hover-min.css'
import BookList from "./BookList";
import {Container} from "react-bootstrap";
import WebsiteNav from "./WebsiteNav";
import React, {useState} from "react";

function App() {
    const [selectedPublisher, setSelectedPublisher] = useState(null);

    const handlePublisherChange = (publisher) => {
        setSelectedPublisher(publisher);
    };

    return (
        <div className="App">
            <Container className="mt-1">
                <WebsiteNav onPublisherChange={handlePublisherChange}/>
                <BookList publisher={selectedPublisher}/>
            </Container>
        </div>
    );
}

export default App;