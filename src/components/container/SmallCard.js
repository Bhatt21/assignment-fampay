import React, {Component} from 'react';
import '../../styles/SmallCard.css'

export default class SmallCard extends Component{
    render(){

        let cards = [];

        if(this.props.data.is_scrollable){
            let scrollableContent = (
                <div className="scrollable">
                    {this.props.data.cards.map((card,key)=>{
                        return (<div className="small-card" style={{backgroundColor : `${card.bg_color}`}}>
                            <div className="small-card-content">
                                <div className="small-card-text-content">
                                    <img src={card.icon.image_url} alt="icon" className="responsive-img-alt">
                                    </img>
                                    <div>
                                        <p className="card-name-text">{card.formatted_title.text}</p>
                                        {card.formatted_description && <p className="avatar-name">{card.formatted_description.entities[0].text}</p> }
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            )
        cards.push(
            scrollableContent
        )}

        else{
            let nonScrollContent = (
                <div className="non-scrollable-container">
                    {this.props.data.cards.map((card,key)=>{
                        return (<div className="small-card-non-scrollable" style={{backgroundColor : `${card.bg_color}`}}>
                            <div className="small-card-content">
                                <div className="small-card-text-content">
                                    <img src={card.icon.image_url} alt="icon" className="responsive-img-alt">
                                    </img>
                                    <div>
                                        <p className="card-name-text">Small Card</p>
                                        {card.formatted_description && <p className="avatar-name">{card.formatted_description.entities[0].text}</p> }
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            ) 
            cards.push(
                nonScrollContent
            )
        }

        return(
            <div className="small-card-container no-transition">
                {cards}
            </div>
        )
    }
}   