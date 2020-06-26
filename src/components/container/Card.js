import React,{Component, Fragment} from 'react';

import BigCard from './BigCard';
import SpinCard from './SpinCard';
import ImageCard from './ImageCard';
import CenterCard from './CenterCard';
import SmallCard from './SmallCard';

import designType from '../../constants/designTypes';

export default class Card extends Component{
    render(){
        let cards = [];

        // if(this.props.data.design_type === designType.IMAGE_CARD){
        //     cards.push(
        //         <ImageCard data = {this.props.data}></ImageCard>
            
        //     )
        // }
        

        if(this.props.data.design_type === designType.BIG_DISPLAY_CARD){
            cards.push(
                <BigCard key={this.props.data.id} data = {this.props.data}></BigCard>
            )
        }
        else if(this.props.data.design_type === designType.SMALL_CARD_WITH_ARROW){
            cards.push(
                <SpinCard key={this.props.data.id} data = {this.props.data}></SpinCard>
            )
        }
        else if(this.props.data.design_type === designType.IMAGE_CARD){
            cards.push(
                <ImageCard key={this.props.data.id} data = {this.props.data}></ImageCard>
            )
        }
        else if(this.props.data.design_type === designType.CENTER_CARD){
            cards.push(
                <CenterCard key={this.props.data.id} data={this.props.data}></CenterCard>
            )
        }
        else if(this.props.data.design_type === designType.SMALL_DISPLAY_CARD){
            cards.push(
                <SmallCard key={this.props.data.id} data = {this.props.data} ></SmallCard>
            )
        }
        
        return(
            <Fragment>
                {cards}
            </Fragment>
        )
    }
}