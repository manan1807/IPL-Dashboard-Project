import React from 'react'
import {Link} from 'react-router-dom'
import './MatchDetailCard.scss';

export const MatchDetailCard = ({ teamName, match }) => {

    if (!match) return null;

    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;

    const otherTeamsRoute = `/teams/${otherTeam}`

    const isMatchWon = teamName === match.matchWinner;


    return (
        <div className={isMatchWon ? 'MatchDetailCard win-Match' : 'MatchDetailCard loss-Match'}>
           <div>
            <span className="vs">vs</span>
            <h1>  <Link to= {otherTeamsRoute}> {otherTeam}</Link></h1>
            <h2 className="match-date">{match.date}</h2>
            <h3 className="match-venue">{match.venue}</h3>
            <h3 className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
            </div>
            <div className="additional-detail">
            <h3>Toss Winner</h3>
            <p>{match.tossWinner}</p>
            <h3>Toss Decision</h3>
            <p>{match.tossWinner} takes decision to <b>{match.tossDecision}</b></p>
            <h3>First Innings</h3>
            <p>{match.team1}</p>
            <h3>Second Innings</h3>
            <p>{match.team2}</p>
            {/* <h3>Man of the Match</h3>
            <p>{match.playerOfMatch}</p> */}
            </div>
        </div>
    );
}
