import React, { Component } from "react";
import Navbar from '../Navbar'
import API from '../../utils/api'
import ResultCard from "../ResultCard";

class Saved extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        API.getBooks()
            .then(res =>  {
                this.setState({ results: res.data });
                console.log('results:', this.state.results)
            })
            .catch(err => {
                throw err
            })
    }

    handleDeleteBook = event => {
        event.preventDefault();

        const bookID = event.target.getAttribute('data-id')

        const newState = {...this.state}

        newState.results = this.state.results.filter(book => book._id !== bookID)
        // Filters out any books with the matching target id

        API.deleteBook(bookID).then(
            (response) => {
                this.setState(newState)
                console.log(response);

            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <h3 className='saved-books-title'>My Bookshelf</h3>
                    <div className='container'>
                        {this.state.results.map((book) => {
                            return (
                                <ResultCard
                                    key={book._id}
                                    title={book.title}
                                    id={book._id}
                                    link={book.link}
                                    author={book.authors[0]}
                                    image={book.image}
                                    description={book.description}
                                    deleteBook={this.handleDeleteBook}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;
