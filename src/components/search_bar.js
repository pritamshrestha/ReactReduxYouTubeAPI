import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state={term:''};
	}
	render(){

		return(
			<div className="col-md-8 col-md-offset-2" >
			 
            <input id="pritam" placeholder="Enter the search keyword !"
             className="form-control"
             value={this.state.term}
             onChange={event=>this.onInputChange(event.target.value)} />
			
             
                

			</div>

			);
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTearmChange(term);

	}
}



export default SearchBar;