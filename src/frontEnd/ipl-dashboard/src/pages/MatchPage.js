import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { MatchDetailCard } from '../components/MatchDetailCard'

export const MatchPage = () => {

  const [matches, setmatches] = useState([]);

  // const teamName = "Delhi Capitals";

  const { teamName, year } = useParams();
  console.log(teamName + year);

  useEffect(
    () => {
      const fetchMatches = async () => {
        const response = await fetch(`http://localhost:8989/team/${teamName}/matches/?year=${year}`);
        const data = await response.json();
        console.log(data);
        setmatches(data);
      };
      fetchMatches();
    }, []
  );


  return (
    <div className="matchPage">
    <h1>Match Page</h1>
    {
            matches.map(match => <MatchDetailCard teamName = {teamName} match={match} />)

    }

    </div>
  );
}


