package com.document_constructor.backend.model;

public class SylabusResponse {
    private Long id;
    private String sylabusName;
    private String type;

    public SylabusResponse(Long id, String sylabusName, String type) {
        this.id = id;
        this.sylabusName = sylabusName;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return sylabusName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setName(String sylabusName) {
        this.sylabusName = sylabusName;
    }

}
