import React from 'react';
import Button from '../Button'

function ResultCard({ title, link, id, author, image, description, saveBook, deleteBook }) {
    if (!saveBook) {
        return (
            <div id='result-card'>
                <div className='row text-center' id='result-header'>
                    <div className='col-3'>
                        <h4>{title}</h4>
                        <h5>{author}</h5>
                    </div>
                    <span className='col text-right'>
                        <Button href={link}>View</Button>
                        <Button id={id} onClick={(event) => deleteBook(event)}>Delete</Button>
                    </span>
                </div>
                <div className='row'>
                    <div className='col-3 text-center'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='col-9 descr'>
                        {description}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id='result-card'>
                <div className='row text-center' id='result-header'>
                    <div className='col-3'>
                        <h4>{title}</h4>
                        <h5>{author}</h5>
                    </div>
                    <span className='col text-right'>
                        <Button href={link}>View</Button>
                        <Button id={id} onClick={(event) => saveBook(event)}>Save</Button>
                    </span>
                </div>
                <div className='row'>
                    <div className='col-3 text-center'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='col-9 descr'>
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultCard;