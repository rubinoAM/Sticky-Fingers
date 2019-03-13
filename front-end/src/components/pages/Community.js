import React, { Component } from 'react';
import { connect } from 'react-redux';
import PersonCard from './PersonCard';
import './friends.css';

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
        }
        
        if(this.state.footer){
            let footer = this.state.footer;
            window.addEventListener("resize",()=>{
                if(Object.keys(this.props.community).length < 5 && Object.keys(this.props.community).length > 2){
                    if(window.innerHeight >= 978 && window.innerWidth <= 1200 && window.innerWidth >= 993){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.top = "100vh";
                    } else {
                        footer.style.width = "auto";
                        footer.style.position = "static";
                        footer.style.bottom = "initial";
                    }
                } else if (Object.keys(this.props.community).length < 3){
                    if(window.innerHeight >= 978 && window.innerWidth <= 1645 && window.innerWidth >= 993){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.top = "100vh";
                    } else if(window.innerHeight >= 978 && window.innerWidth <= 992 && window.innerWidth >= 601){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.top = "100vh";
                    } else {
                        footer.style.width = "auto";
                        footer.style.position = "static";
                        footer.style.bottom = "initial";
                    }
                }
            })
        }

        communityContainers = this.props.community.map((person,i)=>{
            if((i+1)%4 === 0){
                return(
                    <span key={i}>
                        <PersonCard data={person}/>
                        <div className="col s12"></div>
                    </span>
                )
            } else if ((i+1)%2 === 0){
                return(
                    <span key={i}>
                        <PersonCard data={person}/>
                        <div className="col s12 hide-on-large-only"></div>
                    </span>
                )
            } else {
                return(
                    <PersonCard data={person} key={i} />
                )
            }
        })
        console.log(communityContainers)
    
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

export default connect(mapStateToProps)(Community);