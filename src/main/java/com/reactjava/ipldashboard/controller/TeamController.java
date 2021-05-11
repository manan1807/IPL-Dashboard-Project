package com.reactjava.ipldashboard.controller;

import com.reactjava.ipldashboard.Model.Team;
import com.reactjava.ipldashboard.repository.MatchRepository;
import com.reactjava.ipldashboard.repository.TeamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private MatchRepository matchRepository;

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {

        Team team = teamRepository.findByteamName(teamName);


        team.setMatches(matchRepository.findLatestMatchesByTeam(teamName , 4));
        
        return team;

    }
}
