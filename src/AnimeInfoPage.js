import React, { Component } from 'react';
import './AnimeInfoPage.css';
import InfoTable from './InfoTable.js';
import MainImage from './MainImage.js';

//CC
export default class AnimeInfoPage extends Component {
	constructor(props){
		super(props);
		this.getAnime = this.getAnime.bind(this);
		this.handleIdChange = this.handleIdChange.bind(this);
		this.handleIdSubmit = this.handleIdSubmit.bind(this);
		this.state = {
			info: [],
			episodes: [],
			anid:3919,
			img:"",
		}
	}
	handleIdChange(event){
		this.setState({
			anid: event.target.value,
		});

		console.log(event.target.value);
	}
	handleIdSubmit(event){
		this.getAnime();
		event.preventDefault();
	}
	componentDidMount(){
		this.getAnime();
	}
	getAnime(){
		fetch('https://kitsu.io/api/edge/anime/'+this.state.anid+'?include=episodes')  
		.then(  
			(response) => { 
				if (response.status !== 200) {  
					console.log('Looks like there was a problem. Status Code: ' +  
						response.status);  
					return;  
				}
				response.json().then((data) => {
					var attr = data.data.attributes;
					var episodes = [];
					if(data.included!=undefined){
						episodes.push({id:0, col1:"Episodes", col2:"Release"});
						var ilength = data.included.length;

						if(ilength > 5){
							ilength = 5;
						}
						for (var i = 0; i < ilength; i++){
							episodes.push({
								id: data.included[i].id,
								col1: data.included[i].attributes.titles.en_jp,
								col2: data.included[i].attributes.airdate,
							})
						}
					} else {
						episodes.push({id:0, col1:"No episode founded", col2:""});
					}
					this.setState({
						info: [
						{id: 1, col1: 'Official-title', col2: attr.titles.en_jp},
						{id: 2, col1: 'Rating', col2: attr.averageRating},
						{id: 3, col1: 'Abbre', col2: attr.abbreviatedTitles.join(', ')},
						{id: 4, col1: 'Start date', col2: attr.startDate},
						{id: 5, col1: 'End date', col2: attr.endDate}
						],
						episodes: episodes,
						img: attr.posterImage.medium,
					});
				});  
			}  
			)  
		.catch(function(err) {  
			console.log('Fetch Error :-S', err);  
		});
	}
	render(){
		return(
			<div>
			<header>
				<form onSubmit={this.handleIdSubmit}>
				<label>
				ID:
					<input type="text" value={this.state.anid} onChange={this.handleIdChange}/>
				</label>
					<input type="submit" value="Submit" />
				</form>
			</header>
			<div id="title">
			title
			</div>
			
			<MainImage imagesrc={this.state.img}/>

			<InfoTable info={this.state.info} episodes={this.state.episodes}/>
			<div id="character" className="info-box">
			</div>
			</div>
			);	
	}
	
}


