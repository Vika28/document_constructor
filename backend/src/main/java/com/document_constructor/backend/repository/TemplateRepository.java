package com.document_constructor.backend.repository;

import com.document_constructor.backend.entity.template.TemplateEntity;
import com.document_constructor.backend.entity.template.TemplateType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TemplateRepository extends JpaRepository<TemplateEntity, Long> {

    List<TemplateEntity> findAllByTemplateType(TemplateType templateType);
}
