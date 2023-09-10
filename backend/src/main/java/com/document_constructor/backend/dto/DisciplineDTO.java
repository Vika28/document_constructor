package com.document_constructor.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DisciplineDTO {
    private Long id;
    private String name;
    Set<DocumentDTO> documents;
}
