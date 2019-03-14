import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import './friends.css';

class Friends extends Component{
    constructor(){
        super()
        this.state = {
            footer:'',
        }
    }

    componentDidMount(){ //Challenge: Footer resize
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
        let friendContainers;
        if(Object.keys(this.props.friends).length === 0){
            friendContainers = <div className="friends-filler">NO FRIENDS</div>
        } else if (this.state.footer) {
            let footer = this.state.footer;
            window.addEventListener("resize",()=>{
                if(Object.keys(this.props.friends).length < 5 && Object.keys(this.props.friends).length > 2){
                    if(window.innerHeight >= 978 && window.innerWidth <= 1200 && window.innerWidth >= 993){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.top = "100vh";
                    } else {
                        footer.style.width = "auto";
                        footer.style.position = "static";
                        footer.style.bottom = "initial";
                    }
                } else if (Object.keys(this.props.friends).length < 3){
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

            friendContainers = this.props.friends.map((friend,i)=>{
                if((i+1)%4 === 0){
                    return(
                        <span key={i}>
                            <Friend data={friend}/>
                            <div className="col s12"></div>
                        </span>
                    )
                } else if ((i+1)%2 === 0){
                    return(
                        <span key={i}>
                            <Friend data={friend}/>
                            <div className="col s12 hide-on-large-only"></div>
                        </span>
                    )
                } else {
                    return(
                        <Friend data={friend} key={i} />
                    )
                }
            })
        }
    
        return(
            <div className="friends-container">
                <div className="friends-header">
                    <h1>FRIENDS</h1>
                </div>
                <div className="friends-body">
                    <div className="row">
                        {friendContainers}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        friends: state.friends,
    }
}

export default connect(mapStateToProps)(Friends);