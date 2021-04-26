import react, {Component} from 'react';

class Shelf extends Component {
    constructor() {
        super()
    }

    render(){
        return (
            <div>
                {
                    this.props.shelf.map((title) => {
                        return(
                            <p>{title}</p>
                        )
                    })
                }
            </div>
        )
    }
}




export default Shelf;