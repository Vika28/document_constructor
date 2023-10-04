package com.document_constructor.backend.service;

import com.document_constructor.backend.dto.TemplateDTO;
import com.document_constructor.backend.entity.template.TemplateType;
import com.document_constructor.backend.exception.BadRequestException;
import com.document_constructor.backend.mapper.TemplateMapper;
import com.document_constructor.backend.repository.TemplateRepository;
import lombok.AllArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TemplateService {
    private final TemplateRepository templateRepository;
    private final TemplateMapper templateMapper;

    public List<TemplateDTO> findAll(String templateType) {
        if(StringUtils.isBlank(templateType)) {
            throw new BadRequestException("Template type should be not blank");
        }
        TemplateType type = TemplateType.valueOf(templateType.toUpperCase());
        return templateRepository
                .findAllByTemplateType(type)
                .stream()
                .map(templateMapper::toDTO)
                .collect(Collectors.toList());
    }

    public TemplateDTO findById(Long id) {
        return templateMapper.toDTO(
                templateRepository
                        .findById(id)
                        .orElseThrow()
        );
    }
}
