import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Team = () => {
    const [teams, setTeams] = useState([]);
    const {idTeam}= useParams();   
    useEffect( () => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res => res.json())
        .then(data => setTeams(data.teams.[0]))
    },[idTeam])
    console.log(teams)
    return (
        <div className ="container">
            <div className="stadiumDiv">
                <img className="img-1" src={teams.strTeamBanner} alt=""/>
                <img className="img-2" src={teams.strTeamBadge} alt=""/>           
            </div>
            <div className= " middle-content" >
               <div className="textDiv d-flex justify-content-between m-auto ">
                    <div className="text ">
                        <h5> Team Name : {teams.strTeam}</h5> 
                        <h6> Founded Year : { teams.intFormedYear}</h6>  
                        <h6> Country Name : {teams.strCountry}</h6>                                     
                        <h6> Sport Type  : {teams.strLeague}</h6>              
                        <h6> Gender : {teams.strGender}</h6>                             
                    </div>
                    <div className="img-3">
                        <img  src={teams.strTeamFanart3} alt=""/>
                    </div>
               </div>
                <div className="desc">
                    <p>Description :<small>{teams.strDescriptionEN}</small> </p>
                    <p>Description :<small>{teams.strStadiumDescription}</small> </p>
                </div>
                <div className="icons ">         
                    <a href="https://www.facebook.com/"  target="_blank">  <FontAwesomeIcon icon={faFacebook}  /> </a> 
                    <a href="https://twitter.com/"  target="_blank"> <FontAwesomeIcon icon={faTwitter}  /></a>
                    <a className="youtubeIcon" href="https://www.youtube.com" target="_blank"> <FontAwesomeIcon icon={faYoutube}  /></a>
                </div>
            </div>
        
        </div>
    );
};

export default Team;