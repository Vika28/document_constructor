package com.document_constructor.backend.mapper;

import com.document_constructor.backend.dto.DocumentDTO;
import com.document_constructor.backend.dto.UserDTO;
import com.document_constructor.backend.entity.DocumentEntity;
import com.document_constructor.backend.entity.UserEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper {
    UserDTO toDTO(UserEntity user);
    @InheritInverseConfiguration
    UserEntity toEntity(UserDTO userDTO);
}
