import React,  {Component} from 'react';
import '../../styles/SpinCard.css'

export default class SpinCard extends Component{
    render(){
        return(
            <div id="spin-card-container" className="card">
                <div id="spin-card-content">
                    <div id="text-content">
                        <img src={this.props.data.cards[0].icon.image_url} alt="icon" className="responsive-img-alt">
                        </img>
                        <p>{this.props.data.cards[0].formatted_title.text}</p>
                    </div>
                    <div id="action">
                    </div>
                </div>
            </div>
        )
    }
}