import React from 'react';
import debounce from '../debounce/Debounce';
import data from "../assets/bookList.json"
import "../styles/bookFilter.css"

function BookFilter() {
    const bookList = data.book;

    const [searchTerm, setSearchTerm] = React.useState("");
    const [filteredBookData, setFilteredBookData] = React.useState(bookList);


    const handleSearch = function (e) {
        setSearchTerm(e.target.value);

        const search = () => {
            const filteredBooks = bookList.filter(item => {
                return Object.keys(item).some(key =>
                    item[key].toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
                )
            })

            setFilteredBookData(filteredBooks)
        }
        (debounce(search, 500))();

    };




    return (
        <div>
            <div className="searcbox">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="Enter the name of the book"
                    value={searchTerm}
                    style={{width:"18rem", height:"3rem"}}
                    data-testid="text-input"
                />
            </div>
            <>
            <div className="book-list container">
                <div className="row">

                    {filteredBookData.length ? filteredBookData.map((data, index) => (
                        
                        <div className='col-lg-4'                         
                        data-testid="items-list"
                        key={index}
                        >
                            <div className="card">
                                <img src={data.imgUrl} className="card-img-top" alt="book-img" />
                                <div className="card-body">
                                    <h3 className="card-title"> {data.title}</h3>
                                    <h4 className="card-subtitle mb-2 text-muted"><b>Author: </b> {data.author}</h4>
                                    <div className="card-text"><b>Price:</b> Rs.    {data.price} </div>
                                </div>
                            </div>

                        </div>
                    )) : <h2>No Book Found</h2>}
                </div>
            </div>
        </>
        </div>
    )
}

export default BookFilter