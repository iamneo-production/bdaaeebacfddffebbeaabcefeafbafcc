package com.examly.springapp.Repository;

import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
    Profile findById(long id);
   
	
	
}