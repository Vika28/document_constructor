package com.document_constructor.backend.entity.template;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "templates")
public class TemplateEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "content", nullable = false)
    private String content;
    @Column(name = "template_type",nullable = false)
    @Enumerated(EnumType.STRING)
    private TemplateType templateType;
}
