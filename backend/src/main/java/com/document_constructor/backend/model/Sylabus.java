package com.document_constructor.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Sylabus {
    private Long id;
    private String sylabusName;
    private String type;
}
