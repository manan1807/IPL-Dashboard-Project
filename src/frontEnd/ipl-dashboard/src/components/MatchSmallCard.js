import React from 'react'
import {Link} from 'react-router-dom'
import './MatchSmallCard.scss'

 export const MatchSmallCard = ({teamName, match}) => {
 
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;

    const otherTeamsRoute = `/teams/${otherTeam}`

    const isMatchWon = teamName === match.matchWinner;

    return (
    <div className={isMatchWon ? 'MatchSmallCard win-Match' : 'MatchSmallCard loss-Match'}>
       <span className="vs">vs</span>
       <h3><Link to= {otherTeamsRoute}> {otherTeam}</Link></h3>
       <p className="match-date">{match.date}</p>
       <p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</p>

    </div> 
  );
}