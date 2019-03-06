import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Friend extends Component{
    constructor(){
        super()
        this.state = {
            friend:{},
        }
    }

    componentDidMount(){
        this.setState({
            friend:this.props.data,
        })
    }

    render(){
        console.log(this.state.friend);
        return(
            <div className="col s12 m6 l3">
                <div className="card friend-card">
                    <div className="card-image">
                        <Link to="/"><img src="http://lorempixel.com/200/200/cats" className="friend-avatar" alt="" /></Link>
                    </div>
                    <div className="card-content">
                        <span className="friend-username">USERNAME</span>
                        <div className="row friend-details">
                            <div className="col s12">
                                <div className="friend-since">
                                    <p>Friend Since:</p>
                                    <p> XX-XX-XXXX</p>
                                </div>
                                <div className="total-exchanges">
                                    <p>Total Exchanges:</p>
                                    <p> XXX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                    <center>
                        <Link to="/"><button className="btn friend-btn offset-s2">PROFILE</button></Link>
                    </center>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        friend: state.friend
    }
}

export default connect(mapStateToProps)(Friend);