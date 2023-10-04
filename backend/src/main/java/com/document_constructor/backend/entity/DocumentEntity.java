package com.document_constructor.backend.entity;


import com.document_constructor.backend.entity.template.TemplateEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

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
    @Column(name = "discipline_type")
    @Enumerated(EnumType.STRING)
    private DisciplineType disciplineType;
}
