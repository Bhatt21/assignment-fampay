import React, {Component} from 'react';
import '../../styles/CenterCard.css';

export default class CenterCard extends Component{

    render(){

        let ctas = this.props.data.cards[0].cta.map((btn,key)=>{
            return(
                <div key={key}>
                    <button className="center-card-cta cta" type="button">{btn.text}</button>
                </div>
            )
        })

        console.log(this.props.data.cards[0].cta)

        return(
            <div id="center-card-container" className="card">
                <div id="center-card-content">
                    <div id="avatar-image-container">
                        <img src={this.props.data.cards[0].icon.image_url} className="responsive-img" alt="avatar"></img>
                    </div>
                    <div>
                        <p className="avatar-name">{this.props.data.cards[0].title}</p>
                    </div>
                    <div id="card-name">
                        <p>{this.props.data.cards[0].formatted_description.text}</p>
                    </div>
                    <div id="cta-container">
                        {ctas}
                    </div>
                </div>
            </div>
        )
    }
}

