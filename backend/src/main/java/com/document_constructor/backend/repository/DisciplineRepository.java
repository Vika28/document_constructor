package com.document_constructor.backend.repository;

import com.document_constructor.backend.entity.DisciplineEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisciplineRepository extends JpaRepository<DisciplineEntity, Long> {
}
