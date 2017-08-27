import React,{Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from'./components/video_detail';
// create a new component.
// this component should produce some html
const API_KEY='AIzaSyDoL2Ke4snYoAkxQ9f5Lq86Fsor3Kv00Do';


class App extends Component{
	constructor(props){
		super(props);
		this.state={ 
			videos:[],
			selectedVideo:null
		};
	
	this.videoSearch('mount everest');
	}
  
  videoSearch(term){
  	YTSearch({key:API_KEY, term:term}, (videos)=>{
      this.setState({videos:videos,
                    selectedVideo:videos[0]
                });
      //this.setStates({videos:videos});
	});

  }
	render(){
	 const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300)
	return( 
		<div>
		  
	       <SearchBar onSearchTearmChange={videoSearch}/>
	       <VideoDetail  video={this.state.selectedVideo}/>
	       <VideoList
	       onVideoSelect={selectedVideo=>this.setState({selectedVideo})}  
	       videos={this.state.videos}/>

	       

	    </div>
	      );
}

}


// take this component's generated HTML.
// put it on the page(in the DOM)

ReactDOM.render(<App/>,document.querySelector('.container'));