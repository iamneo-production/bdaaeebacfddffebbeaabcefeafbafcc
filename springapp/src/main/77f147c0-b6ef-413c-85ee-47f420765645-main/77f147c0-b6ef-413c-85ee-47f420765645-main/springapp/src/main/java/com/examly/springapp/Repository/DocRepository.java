
package com.examly.springapp.Repository;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.Model.DocumentModel;

public interface DocRepository extends JpaRepository<DocumentModel, String>{
    Optional<DocumentModel> findPhotoByDocid(String docid);

	DocumentModel findDocByDocid(String docid);
}

