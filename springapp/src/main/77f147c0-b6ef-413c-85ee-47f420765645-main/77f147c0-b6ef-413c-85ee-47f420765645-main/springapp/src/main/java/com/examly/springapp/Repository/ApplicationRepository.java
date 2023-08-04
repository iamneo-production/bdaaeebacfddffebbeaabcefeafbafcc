

package com.examly.springapp.Repository;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.examly.springapp.Model.ApplicationModel;

@Repository

public interface ApplicationRepository extends JpaRepository<ApplicationModel, Long>{
	ApplicationModel findByEmail(String email);
	ApplicationModel findById(long id);
	
	List<ApplicationModel> findByIsUpdatedTrue();
	List<ApplicationModel> findByIsUpdatedFalse();
	Optional<ApplicationModel> findPhotoById(long id);
}
