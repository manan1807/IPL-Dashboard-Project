import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'

export const TeamPage = () => {

  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(
    () => {
      const fetchMatches = async () => {
        const response = await fetch(`http://localhost:8989/team/${teamName}`);
        const data = await response.json();
        console.log(data);
        setTeam(data);
      };
      fetchMatches();
    }, [teamName]
  );

  if (!team || !team.teamName) return <h1>Team Name is InCorrect, Please Correct it!!!</h1>

  return (
    <div className="TeamPage">
      <h1 >{team.teamName}</h1>
      <MatchDetailCard teamName = {team.teamName} match={team.matches[0]} />
      {team.matches.slice(1).map(match => <MatchSmallCard teamName = {team.teamName} match={match} />)}
    </div>
  );
}


