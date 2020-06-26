import React, {Component} from 'react';
import '../../styles/ImageCard.css'
import lArrow from '../../assets/images/lArrow.svg'

export default class ImageCard extends Component{

    revealCard = () => {
        var elems = document.getElementsByClassName('no-transition');
        for(var i=0; i<elems.length; i++){
            elems[i].classList.add('invisible');
        }

        var bgContainer =document.getElementById('content-container');
        bgContainer.style.backgroundColor= 'white';
        bgContainer.style.paddingBottom = '0px';

        var currElem = document.getElementById('image-card-container');
        currElem.classList.add('image-card-transition');
        currElem.style.marginBottom = '0px'
        var content = document.getElementById('content');
        content.style.display = 'flex';

        var returnBtn = document.getElementById('return-action');
        returnBtn.style.display = 'block';
    }

    closeCard = () =>{ 
        setTimeout(()=>{
            var elems = document.getElementsByClassName('no-transition');
            for(var i=0; i<elems.length; i++){
                elems[i].classList.remove('invisible');
                console.log(elems[i].classList)
            }
            var bgContainer =document.getElementById('content-container');
            bgContainer.style.backgroundColor= '#F7F6F3'
            bgContainer.style.paddingBottom = '15px';
            var currElem = document.getElementById('image-card-container');
            currElem.className = 'card';
            var content = document.getElementById('content');
            content.style.display = 'none';

            var returnBtn = document.getElementById('return-action');
            returnBtn.style.display = 'none';
        }, 200)
        

        
    }
    
    render(){
        return(
            <div id="image-card-container" className="card" onClick={this.revealCard}>
                <div id="return-action">
                    <button className="return-btn" type="button" onClick={this.closeCard}>
                        <img src={lArrow}></img>
                    </button>
                    <span style={{position: 'relative', bottom: '2px', left: '25px'}}>Savings Challenge</span>
                </div>
                <div className="image-card-image-container">
                    <img alt="bg" src = {this.props.data.cards[0].bg_image.image_url} className="responsive-img"></img>
                </div>
                <div id="content">
                    <div id="top-content">
                        <div className="sm-card">
                            <div>
                                <p>₹10</p>
                            </div>
                            <div>
                                <p>Min Daily Savings</p>
                            </div>
                        </div>
                        <div className="sm-card">
                            <div>
                                <p>10 days</p>
                            </div>
                            <div>
                                <p>Streak to maintain</p>
                            </div>
                        </div>
                    </div>

                    <div id="mid-content">
                        <div className="md-card">
                            <div>
                                <p>Upto ₹2000</p>
                            </div>
                            <div>
                                <p>Instant rewards for successfull 10-Day streak</p>
                            </div>
                        </div>
                    </div>
                    <p
                     style={{'alignSelf': 'flex-start', 'maxWidth': '335px', 'marginLeft': 'auto', 'marginRight': 'auto','width': '91%'}}
                    >Remember the rules</p>
                    <div id="bottom-content">
                        <div className="lg-card">
                            <ul>
                                <li>You must maintain a streak for 10 days</li>
                                <li>To maintain the streak, you must add to your savings once everyday </li>
                                <li>Minimum savings to be added everyday must be ₹10 or above </li>
                                <li>You can add a maximum of ₹200 everyday </li>
                                <li>The streak will break if you exit the challenge or do not add the minimum amount required</li>
                                <li>You lose if you break the savings streak</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}