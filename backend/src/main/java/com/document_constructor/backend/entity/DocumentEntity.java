package com.document_constructor.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@Table(name = "documents")
public class DocumentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false, length = 32)
    private String name;
    @Column(name = "content")
    private String content;
    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private DocumentType type;
    @ManyToOne
    @JoinColumn(name="discipline_id", nullable=false)
    @EqualsAndHashCode.Exclude
    private DisciplineEntity discipline;
}
