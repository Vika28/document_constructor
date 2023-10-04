package com.document_constructor.backend.mapper;

import com.document_constructor.backend.dto.TemplateDTO;
import com.document_constructor.backend.entity.template.TemplateEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface TemplateMapper {
    TemplateDTO toDTO(TemplateEntity headerTemplate);
    @InheritInverseConfiguration
    TemplateEntity toEntity(TemplateDTO templateDTO);
}
