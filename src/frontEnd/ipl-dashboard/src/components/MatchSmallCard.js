import React from 'react'
import {Link} from 'react-router-dom'

 export const MatchSmallCard = ({teamName, match}) => {
 
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;

    const otherTeamsRoute = `/teams/${otherTeam}`

    return (
    <div className="MatchSmallCard">
       <h3> vs  <Link to= {otherTeamsRoute}> {otherTeam}</Link></h3>
       <p>{match.date}</p>
       <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>

    </div> 
  );
}