import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from "react";
import { Badge, Form, FormGroup, Table } from "reactstrap";

Book.propTypes = {
    bookList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        })
    ),
    filterBookList: PropTypes.func,
};

export default function Book(props) {
    const { bookList, filterBookList } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        typingTimeoutRef.current.focus();
    }, []);

    function handleChange(e) {
        let value = e.target.value;
        setSearchTerm(value);
        // console.log(value);
        if (!filterBookList) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {

            filterBookList(value);
        }, 300);
    }
    return (
        <div>
            <h1 className="mt-3 mb-3">
                <Badge color="light">Book</Badge>
            </h1>
            <Form style={{ width: `400px` }}>
                <FormGroup>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        placeholder="search name book..."
                        onChange={handleChange}
                        value={searchTerm}
                        ref={typingTimeoutRef}
                    />
                    {/* <Button color="primary" className="ml-3">
            Search
          </Button> */}
                </FormGroup>
            </Form>
            <Table className="table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

