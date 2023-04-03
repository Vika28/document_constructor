package com.document_constructor.backend.model;

public class Sylabus {
    private Long id;
    private String sylabusName;
    private String type;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSylabusName() {
        return sylabusName;
    }

    public String getSylabusType() {
        return type;
    }
    public void setSylabusName(String sylabusName) {
        this.sylabusName = sylabusName;
    }
}
