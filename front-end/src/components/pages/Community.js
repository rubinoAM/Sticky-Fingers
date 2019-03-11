import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import communityAction from '../../actions/communityAction';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PersonCard from './PersonCard';
import './friends.css';
import Friend from './Friend';

class Community extends Component{
    constructor(){
        super()
        this.state = {
            footer:'',
        }
    }

    componentDidMount(){ 
        // this.props.communityAction();
        // console.log(this.props.community)

        this.setState({
            footer:window.document.getElementById('footer'),
        })

    }

    componentWillUnmount(){
        let footer = this.state.footer;
        footer.style.width = "auto";
        footer.style.position = "static";
        footer.style.bottom = "initial";
    }


    render(){
        let communityContainers;
        if(Object.keys(this.props.community).length === 0){
            communityContainers = <div className="friends-filler">NO ONE</div>
        } else if (this.state.footer) {
            let footer = this.state.footer;
            window.addEventListener("resize",()=>{
                if(Object.keys(this.props.friends).length < 5 && Object.keys(this.props.community).length > 2){
                    if(window.innerHeight >= 978 && window.innerWidth <= 1200 && window.innerWidth >= 993){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.bottom = "0";
                    } else {
                        footer.style.width = "auto";
                        footer.style.position = "static";
                        footer.style.bottom = "initial";
                    }
                } else if (Object.keys(this.props.community).length < 3){
                    if(window.innerHeight >= 978 && window.innerWidth <= 1645 && window.innerWidth >= 993){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.bottom = "0";
                    } else if(window.innerHeight >= 978 && window.innerWidth <= 992 && window.innerWidth >= 601){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.bottom = "0";
                    } else {
                        footer.style.width = "auto";
                        footer.style.position = "static";
                        footer.style.bottom = "initial";
                    }
                }
            })

            communityContainers = this.props.community.map((person,i)=>{
                return <PersonCard data={person} key={i} />
            })
        }
    
        return(
            <div className="friends-container">
                <div className="friends-header">
                    <h1>COMMUNITY</h1>
                </div>
                <div className="friends-body">
                    <div className="row">
                        {communityContainers}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        community: state.community,
        friends: state.friends
    }
}

// function mapDispatchToProps(dispatcher){
//     return bindActionCreators({
//         communityAction
//     },dispatcher)
// }

export default connect(mapStateToProps)(Community);