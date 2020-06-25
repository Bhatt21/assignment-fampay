import React, {Component} from 'react';
import '../../styles/BigCard.css';
import bellIcon from '../../assets/images/bell.svg';
import dismissIcon from '../../assets/images/dismiss.svg';

var timer;

export default class BigCard extends Component{

    constructor(){
        super();
    }

    reveal() {
       timer = setTimeout(()=>{
        let elem = document.getElementById('overlap');
        elem.style.transform = 'translateX(100px)';
        let dismisser = document.getElementById('bg-content');
        dismisser.style.transform = 'translateX(100px)'
    },1000)
    
        
    }

    remove = () => {
        let elem = document.getElementById('big-card-container');
        elem.style.height = '0px';
        // localStorage.setItem('big-card-visible', false);
    }
 
    resetTimer=()=>{
        clearTimeout(timer);
    }

    render(){

        return(
            !localStorage.getItem('big-card-visible') && 
            <div id="big-card-container" className="card">
                <div id="bg-content">
                    <div className="bg-card" 
                    onClick={this.remove}
                    >
                        <img src={bellIcon} alt="remind later"></img>
                        <p>remind later</p>
                    </div>
                    <div className="bg-card" onClick={this.remove}>
                        <img src={dismissIcon} alt="dismiss"></img>
                        <p>dismiss now</p>
                    </div>
                </div>
                <div id="overlap" 
                onMouseDown={this.reveal} 
                onMouseLeave={this.resetTimer} 
                onMouseUp={this.resetTimer} 
                onTouchStart={this.reveal} 
                onTouchEnd={this.resetTimer}
                style={{backgroundImage: `url(${this.props.data.cards[0].bg_image.image_url})`}}>
                    <div id="big-card-content" >
                        <div id="action-content">
                            <h3><span className="highlight">{this.props.data.cards[0].formatted_title.entities[0].text}</span> {this.props.data.cards[0].formatted_title.entities[1].text}</h3>
                            <p>{this.props.data.cards[0].description}</p>
                            <button className="big-card-cta cta" type="button">Action</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}