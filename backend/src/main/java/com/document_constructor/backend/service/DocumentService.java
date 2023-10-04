package com.document_constructor.backend.service;

import com.document_constructor.backend.dto.DocumentDTO;
import com.document_constructor.backend.entity.DisciplineEntity;
import com.document_constructor.backend.entity.DocumentEntity;
import com.document_constructor.backend.mapper.DocumentMapper;
import com.document_constructor.backend.repository.DisciplineRepository;
import com.document_constructor.backend.repository.DocumentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DocumentService {
    private final DocumentRepository documentRepository;
    private final DisciplineRepository disciplineRepository;
    private final DocumentMapper documentMapper;

    public DocumentDTO create(DocumentDTO documentDTO, Long disciplineId) {
        DisciplineEntity discipline = disciplineRepository.findById(disciplineId).orElseThrow(EntityNotFoundException::new);

        DocumentEntity document = documentMapper.toEntity(documentDTO);
        document.setDiscipline(discipline);
        return documentMapper.toDTO(documentRepository.save(document));
    }

    public DocumentDTO findById(Long id) {
        DocumentEntity document = documentRepository.findById(id).orElseThrow(() -> new RuntimeException(
                String.format(
                        "Document with id {%s} not found",
                        id
                )
        ));
        return documentMapper.toDTO(document);
    }

    public List<DocumentDTO> findAll(Long disciplineId) {
        return documentRepository
                .findAllByDisciplineId(disciplineId)
                .stream()
                .map(documentMapper::toDTO)
                .collect(Collectors.toList());
    }

    public DocumentDTO addHeader(DocumentDTO documentDTO, Long id) {
        DocumentEntity document = documentRepository.findById(id).orElseThrow();
        document.setContent(documentDTO.getContent());
        return documentMapper.toDTO(documentRepository.save(document));
    }
}
