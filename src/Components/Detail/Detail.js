import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Detail.css'

const Detail = (props) => {
   
    const {idTeam, intFormedYear, strCountry, strTeamBadge,  strTeamBanner, strTeam } = props.team;
    return (
        <div className=" m-3">
            <div >
                {/* <img src={strStadiumThumb} alt=""/> */}
            </div>
                 <div className="card-img ms-5">
                 <Card style={{ width: '20rem'  }}>
                     <Card.Img variant="top" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title> Team ID : {idTeam}</Card.Title>
                        <Card.Title> Founded Year : {intFormedYear}</Card.Title>
                        <Card.Title> Country  Name : {strCountry}</Card.Title>
                        <Card.Text>
                           Team Name : {strTeam}
                        </Card.Text>  
                        <Link to={`/team/${idTeam}`}><button className="btn-primary rounded">
                             Team Information <FontAwesomeIcon icon={faArrowRight} /></button></Link>                 
                    </Card.Body>
                    </Card>
                 </div>
        </div>
    );
};

export default Detail;