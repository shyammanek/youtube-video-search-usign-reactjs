import './App.css';
import Youtube from './api/Youtube';
import {Grid, grid} from '@material-ui/core'
import Searchbar from './youtube/Searchbar';
import Videolist from './youtube/Videolist';
import React from 'react';

class App extends React.Component {

  state = {
    video:[],
    selectedVideo:null,
  }

  handleSubmit = async (searchTerm) => {
    const response = await Youtube.get('search',
    {params:{
      part:'snippet',
      maxResults: 7,
      key:'AIzaSyCJ_bWNQJCQlqQTY3NehHZMTt-OUgJ-8rk',
      q:searchTerm,
  }
});
    console.log(response);
  this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
  }
render(){
  const {selectedVideo} = this.state;
  return (
    <Grid justify="center" container spacing={16}>
      <Grid item x5={12} >
        <Grid container spacing={10}>
          <Grid item x5={12} >

          <Searchbar onFormSubmit={this.handleSubmit}/>
          </Grid>
          
          <Grid item x5={8} >
    <Videodetail video={this.state.selectedVideo} />

          </Grid>

          <Grid item x5={4} >


          </Grid>


        </Grid>
      </Grid>
    </Grid>
    );
}
}
export default App;
