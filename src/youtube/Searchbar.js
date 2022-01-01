import React, { Component } from 'react'

import { Paper,TextField } from '@material-ui/core'

export default class Searchbar extends Component {

    state ={
        
        searchTerm:'',
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }
    handleSubmit = (event) => {
        const {searchTerm}=this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
        
    }
    render() {
        return (
            
                <Paper elevation={6} style={{padding:'25'}}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField fullWidth label="Serach" onChange={this.handleChange} />

                        
                    </form>
                </Paper>
            
        )
    }
}
