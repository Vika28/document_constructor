package com.document_constructor.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Discipline {
    private Long id;
    private String name;
    private Set<Sylabus> sylabuses;

}
