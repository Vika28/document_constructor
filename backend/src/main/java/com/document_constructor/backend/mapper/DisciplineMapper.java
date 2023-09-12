package com.document_constructor.backend.mapper;

import com.document_constructor.backend.dto.DisciplineDTO;
import com.document_constructor.backend.entity.DisciplineEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel =  MappingConstants.ComponentModel.SPRING)
public interface DisciplineMapper {
    DisciplineDTO toDTO(DisciplineEntity discipline);
    @InheritInverseConfiguration
    DisciplineEntity toEntity(DisciplineDTO disciplineDTO);
}
