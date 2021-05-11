package com.reactjava.ipldashboard.repository;

import java.util.List;

import com.reactjava.ipldashboard.Model.Team;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long>{
    
    Team findByteamName(String teamName);
}
