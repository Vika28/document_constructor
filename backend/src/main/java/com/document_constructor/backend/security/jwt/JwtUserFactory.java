package com.document_constructor.backend.security.jwt;

import com.document_constructor.backend.entity.Role;
import com.document_constructor.backend.entity.UserEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

public final class JwtUserFactory {
    public JwtUserFactory() { }

    public static JwtUser create(UserEntity user) {
        return new JwtUser(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                mapToGrantedAuthority(user.getRole())
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthority(Role role) {
        return List.of(new SimpleGrantedAuthority(role.toString()));
    }
}
