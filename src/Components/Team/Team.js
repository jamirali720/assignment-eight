import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Conditional from '../Conditional/Conditional';
import { faAward, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
    const [teams, setTeams] = useState([]);
    const [gender, setGender] = useState(true)
    const {idTeam}= useParams();   
    useEffect( () => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res => res.json())
        .then(data => setTeams(data.teams.[0]))
    },[idTeam])
    let changeGender;
  
   changeGender = gender ? <h6> Gender : {teams.strGender}</h6>  : <h6> Gender : Female</h6>
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
                        <h6> <FontAwesomeIcon icon={faAward}  className="text-white"/> Founded Year : { teams.intFormedYear}</h6>  
                        <h6><FontAwesomeIcon icon={faFlag}  className="text-white" />  Country Name : {teams.strCountry}</h6>                                     
                        <h6> <FontAwesomeIcon icon={faFutbol}  className="text-white"/> Sport Type  : {teams.strLeague}</h6>              
                        {/* <h6> Gender : {teams.strGender}</h6>  */}
                        <div className="icon-gender "> <span className="text-white">
                            <FontAwesomeIcon icon={faMars}/></span>  <span> {changeGender}</span></div>
                    </div>
                    <div>
                        <button className="mt-5 bg-primary rounded p-1 text-white" onClick={()=> setGender(!gender) }>Change Gender</button>
                    </div>
                    <div className="img-3">                     
                        <Conditional gender={gender}></Conditional>
                    </div>
                  
               </div>
                <div className="desc">
                    <p>Description :<small>{teams.strDescriptionEN}</small> </p>
                    <p>Description :<small>{teams.strStadiumDescription}</small> </p>
                </div>
                <div className="icons ">         
                    <a href="https://www.facebook.com/" >  <FontAwesomeIcon icon={faFacebook}  /> </a> 
                    <a href="https://twitter.com/"  > <FontAwesomeIcon icon={faTwitter}  /></a>
                    <a className="youtubeIcon" href="https://www.youtube.com" > <FontAwesomeIcon icon={faYoutube}  /></a>
                </div>
            </div>
        
        </div>
    );
};

export default Team;
