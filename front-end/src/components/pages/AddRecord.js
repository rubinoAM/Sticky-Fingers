import React, { Component } from 'react';
import axios from 'axios';
import './addrecord.css';

class AddRecord extends Component{
    constructor(){
        super()
        this.state = {
            result:{}
        }
    }

    componentDidMount(){
        
    }

    sendSearch = (e)=>{
        e.preventDefault();
        const searchTitle = e.target[0].value;
        const searchArtist = e.target[1].value;
        const searchRequest = axios.get(`${window.apiHost}/users/addrecord/${searchTitle}/${searchArtist}`);
        searchRequest.then((resp)=>{
            const recordData = resp.data;
            this.setState({
                result:recordData,
            })
            console.log(recordData);
        });
    }

    submitRecord = (e)=>{
        e.preventDefault();
    }

    render(){
        let resultTitle = this.state.result.title;
        let resultArtist = this.state.result.artist;
        let resultYear = this.state.result.year;
        let resultGenre = this.state.result.genre;
        let resultCover;

        if(this.state.result.imageUrl){
            resultCover = this.state.result.imageUrl;
        } else {
            resultCover = 'https://via.placeholder.com/300';
        }

        return(
            <div>
                <div className="add-record-header">
                    <h1>Add Record</h1>
                    <span>Enter the requested details below, and we will provide the closest match in our database.</span>
                </div>
                <div className="add-record-body">
                    <div className="container">
                        <div className="row">
                            <form className="col s12 search-box" id="search-box" onSubmit={this.sendSearch}>
                                <div className="search-body">
                                    <div className="row">
                                        <div className='input-field col s10 offset-s1'>
                                            <input className='validate' type='text' name='searchTitle' id='searchTitle' />
                                            <label htmlFor='searchTitle'>Enter a Record Title</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='input-field col s10 offset-s1'>
                                            <input className='validate' type='text' name='searchArtist' id='searchArtist' />
                                            <label htmlFor='searchArtist'>Enter the Record's Artist</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <center>
                                            <button className="btn check-record-btn">SEARCH</button>
                                        </center>
                                    </div>
                                </div>
                            </form>
                            <div className="results-section" id="results-section">
                                <h1 className="results-header col s12">Results</h1>
                                <form className="col s12 results-box" id="results-box" onSubmit={this.submitRecord}>
                                    <div className="row">
                                        <div className="col s12 m4">
                                            <img className="results-img" id="results-img" src={resultCover} alt="" />
                                        </div>
                                        <div className="col s12 m8 results-details">
                                            <div className="row">
                                                <div className="col s12 m6">
                                                    <input readOnly className='validate' type='text' name='recordTitle' id='recordTitle' value={resultTitle}/>
                                                    <label htmlFor='recordTitle'>Record Title</label>
                                                </div>
                                                <div className="col s12 m6">
                                                    <input readOnly className='validate' type='text' name='recordArtist' id='recordArtist' value={resultArtist}/>
                                                    <label htmlFor='recordArtist'>Record Artist</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12 m6">
                                                    <input readOnly className='validate' type='text' name='recordYear' id='recordYear' value={resultYear}/>
                                                    <label htmlFor='recordYear'>Record Year</label>
                                                </div>
                                                <div className="col s12 m6">
                                                    <input readOnly className='validate' type='text' name='recordGenre' id='recordGenre' value={resultGenre}/>
                                                    <label htmlFor='recordGenre'>Record Genre</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <span className="col m9 hide-on-small-only"></span>
                                        <button className="btn add-record-btn col s12 m3">ADD</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddRecord;