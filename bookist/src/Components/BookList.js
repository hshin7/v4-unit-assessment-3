import react, {Component} from 'react';

class BookList extends Component{
    constructor() {
        super()

    
    }
    //{
    // books: this.state.books => data
   // } = props
   //this.props.books
    render(){
        return (
            <div className = "BookList">{
                this.props.books.map((data) => { return(
                    <div>
                    <p>{data.title}</p>
                    <p>{data.author}</p>
                    <img src={data.img} onClick = {() => this.props.addToShelf(data.title)}/>
                    </div>      
                )})
            }</div>
        )
    }
}



export default BookList;