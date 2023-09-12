package com.document_constructor.backend.repository;

import com.document_constructor.backend.entity.DocumentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<DocumentEntity, Long> {
}
