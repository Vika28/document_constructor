package com.document_constructor.backend.model;

public class Sylabus {
    private Long id;
    private Long disciplineId;
    private String sylabusName;
    private String type;

    public Sylabus() {
    }

    public Sylabus(Long id, Long disciplineId, String sylabusName, String type) {
        this.id = id;
        this.disciplineId = disciplineId;
        this.sylabusName = sylabusName;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDisciplineId() {
        return disciplineId;
    }

    public void setDisciplineId(Long disciplineId) {
        this.disciplineId = disciplineId;
    }

    public String getSylabusName() {
        return sylabusName;
    }

    public void setSylabusName(String sylabusName) {
        this.sylabusName = sylabusName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
