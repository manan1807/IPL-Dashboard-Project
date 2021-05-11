package com.reactjava.ipldashboard.repository;

import java.util.List;

import com.reactjava.ipldashboard.Model.Match;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match,Long>{
    
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName, String teamName2, Pageable pageable);

    default List<Match> findLatestMatchesByTeam(String teamName, int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }
}
