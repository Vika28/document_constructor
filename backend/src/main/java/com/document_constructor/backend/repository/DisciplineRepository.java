package com.document_constructor.backend.repository;

import com.document_constructor.backend.entity.DisciplineEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DisciplineRepository extends JpaRepository<DisciplineEntity, Long> {
    List<DisciplineEntity> findAllByUserId(Long userId);
}
