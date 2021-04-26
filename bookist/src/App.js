import React, {Component} from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data'; 


class App extends Component{
  constructor(){
    super()


    this.state = {
      books: data,
      shelf: [],
    }
    
    this.addToShelf = this.addToShelf.bind(this)
  }
  
  //to add a book title into the shelf array in the state
  addToShelf(title) {
    this.state.shelf.push(title)
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <BookList books={this.state.books} addToShelf = {this.addToShelf} />
        <Shelf shelf = {this.state.shelf} />
      </div>
    );
  }
}


export default App;
