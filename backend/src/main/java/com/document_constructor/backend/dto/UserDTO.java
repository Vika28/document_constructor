package com.document_constructor.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class UserDTO {
    @JsonProperty("email")
    private String email;
    @JsonIgnore
    @JsonProperty("password")
    private String password;
    @JsonProperty("username")
    private String username;

    public void setPassword(String password) {
        this.password = password;
    }
}
