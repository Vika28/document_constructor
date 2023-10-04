package com.document_constructor.backend.repository;

import com.document_constructor.backend.entity.DocumentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumentRepository extends JpaRepository<DocumentEntity, Long> {
    List<DocumentEntity> findAllByDisciplineId(Long disciplineId);
}
