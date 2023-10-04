package com.document_constructor.backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "username", nullable = false)
    private String username;
    @Enumerated(value = EnumType.STRING)
    @Column(name = "role", nullable = false)
    private Role role;
}
