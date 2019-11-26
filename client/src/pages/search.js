import React, { Component } from 'react';
import Jumbotron from '../component/Jumbrotron';
import API from '../utils/API';
import Card from '../component/Cards'

class search extends Component { 
    state={
        searchTerm:'',
        books:[]
    }
    inputChange=event => {
        console.log(this.state.searchTerm)
        const{
            name,value
        } =event.target
        this.setState({
            [name]:value
        })
    }
    handleSearch=event => {
        event.preventDefault()
        //called from API.js file
        API.getBooks(this.state.searchTerm)
        .then(res=>{
            console.log(res)
            this.setState({
                books:res.data.items
            })
        })
    }
    render(){
        return(
            <div>
            <Jumbotron>Google Book Search App</Jumbotron>
            <form>
                <div className='input-group'>
                    <input type='text' name='searchTerm' value={this.state.searchTerm} onChange={this.inputChange}></input>
                </div>
                <button onClick={this.handleSearch}>Search</button>
            </form>
            {this.state.books.map(book=>{
                return(
                    <Card
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors[0]}
                        key={book.id}
                    ></Card>
                )
            })}
            </div>

        )
    }
}

export default search