import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Friend from './Friend';
import './friends.css';

class Friends extends Component{
    constructor(){
        super()
        this.state = {
            friends:[1,2,3,4],
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
        if(this.state.friends.length === 0){
            friendContainers = <div className="friends-filler">NO FRIENDS</div>
        } else if (this.state.footer) {
            let footer = this.state.footer;
            window.addEventListener("resize",()=>{
                if(this.state.friends.length < 5 && this.state.friends.length > 2){
                    if(window.innerHeight >= 978 && window.innerWidth <= 1200 && window.innerWidth >= 993){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.bottom = "0";
                    } else {
                        footer.style.width = "auto";
                        footer.style.position = "static";
                        footer.style.bottom = "initial";
                    }
                } else if (this.state.friends.length < 3){
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

            friendContainers = this.state.friends.map((friend,i)=>{
                return <Friend data={friend} key={i} />
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

export default Friends;