package com.document_constructor.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DocumentDTO {
    private Long id;
    private String name;
    private String content;
    private String type;
    private String disciplineType;
}
// https://drive.google.com/uc?export=view&id=1AutZEBaG78MVDLrvCBe7w1o0-xSfKsdl