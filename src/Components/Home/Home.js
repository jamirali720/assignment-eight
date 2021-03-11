import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    
    return (
        <div className="text-center ps-5 container-fluid responseDiv">
           
          <div className="title">
                <h1> Football  Premier Team</h1>
                <img   src="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/nzrkjuoqh7onjyft_1580744253.jpeg?tr=w-758,h-433" alt=""/>
          </div>
           <div className="HomeStyle">  
           {
               teams.map((team, idTeam)=> <Detail team={team} key={idTeam}></Detail> )
           }       
           </div>
          
        </div>
    );
};

export default Home;