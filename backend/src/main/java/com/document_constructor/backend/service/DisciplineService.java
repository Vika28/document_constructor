package com.document_constructor.backend.service;

import com.document_constructor.backend.dto.DisciplineDTO;
import com.document_constructor.backend.entity.DisciplineEntity;
import com.document_constructor.backend.entity.UserEntity;
import com.document_constructor.backend.mapper.DisciplineMapper;
import com.document_constructor.backend.repository.DisciplineRepository;
import com.document_constructor.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DisciplineService {
    private final DisciplineRepository disciplineRepository;
    private final UserRepository userRepository;
    private final DisciplineMapper disciplineMapper;

    public DisciplineDTO create(DisciplineDTO disciplineDTO) {
        DisciplineEntity discipline = disciplineMapper.toEntity(disciplineDTO);
        UserEntity user = getAuthenticatedUser();
        discipline.setUser(user);
        return disciplineMapper.toDTO(
                disciplineRepository.save(discipline)
        );
    }

    public List<DisciplineDTO> findAll() {
        UserEntity user = getAuthenticatedUser();
        return disciplineRepository
                .findAllByUserId(user.getId())
                .stream()
                .map(disciplineMapper::toDTO)
                .collect(Collectors.toList());
    }

    private UserEntity getAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        return userRepository.findByEmail(email).orElseThrow();
    }
}