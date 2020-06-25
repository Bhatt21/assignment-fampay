import React, {Component} from 'react';
import '../../styles/ImageCard.css'

export default class ImageCard extends Component{
    
    render(){
        return(
            <div id="image-card-container" className="card" style={{backgroundImage: `url(${this.props.data.cards[0].bg_image.image_url})`}}>
                <div id="content">
                    <div id="top-content">
                        <div className="sm-card">
                            <div>
                                <p>10</p>
                            </div>
                            <div>
                                <p>Min Daily Savings</p>
                            </div>
                        </div>
                        <div className="sm-card">
                            <div>
                                <p>10</p>
                            </div>
                            <div>
                                <p>Min Daily Savings</p>
                            </div>
                        </div>
                    </div>

                    <div id="mid-content">
                        <div className="md-card">
                            <div>
                                <p>10</p>
                            </div>
                            <div>
                                <p>Min Daily Savings</p>
                            </div>
                        </div>
                    </div>
                    <p>Remember the rules</p>
                    <div id="bottom-content">
                        <div className="lg-card">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}