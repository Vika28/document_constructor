package com.document_constructor.backend.entity;

import lombok.Getter;

@Getter
public enum Role {
    USER("User"),
    ADMIN("Admin");

    Role(String roleName) {
        this.roleName = roleName;
    }

    public String roleName;
}
