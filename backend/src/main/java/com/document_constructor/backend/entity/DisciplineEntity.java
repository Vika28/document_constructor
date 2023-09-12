package com.document_constructor.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "discipline")
public class DisciplineEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "discipline_id")
    private Set<DocumentEntity> documents;

}
