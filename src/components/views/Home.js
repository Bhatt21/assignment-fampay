import React,  {Component} from 'react';
import logo from '../../assets/images/fampaylogo.svg';
import BigCard from '../container/BigCard';
import SpinCard from '../container/SpinCard';
import '../../styles/Home.css';
import ImageCard from '../container/ImageCard';
import CenterCard from '../container/CenterCard';
import Card from '../container/Card';

const url = 'https://run.mocky.io/v3/9fc6c82f-3fde-431d-b1e5-0a1982928cb4';

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            loading: true,
            data : []
        }
    }

    async componentDidMount(){
        try{
            let response = await fetch(url);
            if(response){
                let result = await response.json();
                this.setState({
                    data: result,
                    loading: false
                })
            }
        }
        catch(err){
            console.log(err);
            
        }
    }

    render(){
        console.log(this.state.data);
        let content;

        let cards = this.state.data.map((card,key)=>{
            return(
                <Card key={key} data={card}></Card>
            )
        });

        if(this.state.loading){
            content = (
                <div>
                    Loading
                </div>
            )
        }else{
            content = (
                <div id="content-container">
                    {/* <BigCard data={this.state.data[0]}></BigCard>
                    <SpinCard data={this.state.data[1]}></SpinCard>
                    <ImageCard data={this.state.data[2]}></ImageCard>
                    <CenterCard data={this.state.data[3]}></CenterCard>
                    
                        <SpinCard data={this.state.data[4]}></SpinCard>
                        <SpinCard data={this.state.data[5]}></SpinCard> */}
                    {cards}                   
                </div>
            )
        }
        return(
            <div id="home-container">
                <div id="logo-container">
                    <img src={logo} alt="logo" className="responsive-img"></img>
                </div>
                {content}
            </div>
        )
    }
}