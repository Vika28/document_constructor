package com.document_constructor.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TemplateDTO {
    @JsonProperty("id")
    private Long id;
    @JsonProperty("content")
    private String content;
    @JsonProperty("templateType")
    private String templateType;
}
