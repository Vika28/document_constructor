package com.document_constructor.backend.mapper;

import com.document_constructor.backend.dto.DocumentDTO;
import com.document_constructor.backend.entity.DocumentEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel =  MappingConstants.ComponentModel.SPRING)

public interface DocumentMapper {
    DocumentDTO toDTO(DocumentEntity document);
    @InheritInverseConfiguration
    DocumentEntity toEntity(DocumentDTO documentDTO);
}
