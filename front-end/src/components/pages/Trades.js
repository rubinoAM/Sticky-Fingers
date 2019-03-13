import React, { Component } from 'react';
import './trades.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import tradesAction from '../../actions/tradesAction';
import Trade from './Trade';

class Trades extends Component{
    constructor(){
        super()
        this.state = {
            trades:[
                /* {
                    user1Trade:{
                        userName:'DMCx1996',
                        coverUrl:'https://images-na.ssl-images-amazon.com/images/I/51xXiWsyqrL.jpg',
                        title:'What Makes A Man Start Fires?',
                        artist:'Minutemen',
                        year:'1983',
                        genre:'Funk Punk',
                    },
                    user2Trade:{
                        userName:'rhymesgalore',
                        coverUrl:'https://media.pitchfork.com/photos/5929a79fc0084474cd0c0c25/1:1/w_320/88076201.jpg',
                        title:'Lullabies Help The Brain Grow',
                        artist:'Big Boys',
                        year:'1983',
                        genre:'Funk Punk',
                    },
                    user1Address:{
                        street:'10872 E Via Cortana Rd',
                        city:'Scottsdale',
                        state:'AZ',
                        zip:'85262',
                    },
                    user2Address:{
                        street:'10566 W Morrison Ave',
                        city:'New Brunswick',
                        state:'NJ',
                        zip:'11310',
                    },
                    sendOffDate:'February 22nd, 2019',
                    returnDate:'March 22nd, 2019',
                }, */
            ]
        }
    }

    componentDidMount(){
        this.props.tradesAction(this.props.trades,this.props.auth);
    }

    render(){
        console.log(this.props);
        let trades = this.props.trades.map((trade,i)=>{
            return <Trade key={i} data={trade} />
        })

        return(
            <div className="trades-page">
                <div className="trades-header">
                    <h1>TRADES</h1>
                    <span>Here are all of the trades currently associated with your account.</span>
                </div>
                <div className="trades-body">
                    {trades}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        trades:state.trades,
        auth:state.auth,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        tradesAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Trades);