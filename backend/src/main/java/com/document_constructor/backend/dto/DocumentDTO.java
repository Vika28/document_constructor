package com.document_constructor.backend.dto;

import com.document_constructor.backend.model.Discipline;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DocumentDTO {
    @JsonProperty("sylabusName")
    private String name;
    private String content;
    private String type;
    @JsonIgnore
    private DisciplineDTO discipline;
}
