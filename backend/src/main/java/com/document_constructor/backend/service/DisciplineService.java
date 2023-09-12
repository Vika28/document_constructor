package com.document_constructor.backend.service;

import com.document_constructor.backend.dto.DisciplineDTO;
import com.document_constructor.backend.entity.DisciplineEntity;
import com.document_constructor.backend.mapper.DisciplineMapper;
import com.document_constructor.backend.repository.DisciplineRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DisciplineService {

    private final DisciplineRepository disciplineRepository;
    private final DisciplineMapper disciplineMapper;

    public DisciplineDTO create(DisciplineDTO disciplineDTO) {
        DisciplineEntity discipline = disciplineMapper.toEntity(disciplineDTO);
        return disciplineMapper.toDTO(
                disciplineRepository.save(discipline)
        );
    }

    public List<DisciplineDTO> findAll() {
        return disciplineRepository.findAll().stream().map(disciplineMapper::toDTO).collect(Collectors.toList());
    }
}