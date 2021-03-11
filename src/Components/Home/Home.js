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
        <div className="">
            <h1> Total Number of Teams : { teams.length}</h1>
           <div className="HomeStyle">  
           {
               teams.map((team, idTeam)=> <Detail team={team} key={idTeam}></Detail> )
           }       
           </div>
          
        </div>
    );
};

export default Home;