import React,{Component, Fragment} from 'react';

import BigCard from './BigCard';
import SpinCard from './SpinCard';
import ImageCard from './ImageCard';
import CenterCard from './CenterCard';
import SmallCard from './SmallCard';

const HC3 = 'HC3';
const HC6 = 'HC6';
const HC5 = 'HC5';
const HC4 = 'HC4';
const HC1 = 'HC1';



export default class Card extends Component{
    render(){
        let cards = [];

        

        if(this.props.data.design_type === HC3){
            cards.push(
                <BigCard data = {this.props.data}></BigCard>
            )
        }else if(this.props.data.design_type === HC6){
            cards.push(
                <SpinCard data = {this.props.data}></SpinCard>
            )
        }else if(this.props.data.design_type === HC5){
            cards.push(
                <ImageCard data = {this.props.data}></ImageCard>
            )
        }else if(this.props.data.design_type === HC4){
            cards.push(
                <CenterCard data={this.props.data}></CenterCard>
            )
        }else if(this.props.data.design_type === HC1){
            cards.push(
                <SmallCard data = {this.props.data} ></SmallCard>
            )
        }
        return(
            <Fragment>
                {cards}
            </Fragment>
        )
    }
}