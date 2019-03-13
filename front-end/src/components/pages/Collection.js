import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecordCard from '../utility/RecordCard';
import './collection.css';

class Collection extends Component{
    constructor(){
        super()
        this.state = {
            // records: [],
            footer: '',
        }
    }

    componentDidMount(){
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
        //console.log(this.props);
        let recordsArray = this.props.coll.map((record,i)=>{
            if((i+1)%4 === 0){
                return(
                    <span key={i}>
                        <RecordCard data={record}/>
                        <div className="col s12"></div>
                    </span>
                )
            } else if ((i+1)%2 === 0){
                return(
                    <span key={i}>
                        <RecordCard data={record}/>
                        <div className="col s12 hide-on-large-only"></div>
                    </span>
                )
            } else {
                return(
                    <RecordCard data={record} key={i} />
                )
            }
        })

        if (this.state.footer) {
            let footer = this.state.footer;
            window.addEventListener("resize",()=>{
                if(this.props.coll.length < 5 && this.props.coll.length > 2){
                    if(window.innerHeight >= 978 && window.innerWidth <= 1200 && window.innerWidth >= 993){
                        footer.style.width = "100vw";
                        footer.style.position = "absolute";
                        footer.style.top = "100vh";
                    } else {
                        footer.style.width = "auto";
                        footer.style.position = "static";
                        footer.style.top = "initial";
                    }
                } if (this.props.coll.length < 3){
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

        return(
            <div className="collection-container">
                <div className="collection-header">
                    <h1>COLLECTION</h1>
                </div>
                <div className="collection-body">
                    <div className="row">
                        {recordsArray}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        coll: state.coll
    }
}

// function mapDispatchToProps(dispatcher){
//     return bindActionCreators({
//         collectionAction
//     },dispatcher)
// }

export default connect(mapStateToProps)(Collection);
