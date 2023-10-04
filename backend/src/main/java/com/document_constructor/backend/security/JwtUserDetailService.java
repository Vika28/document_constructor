package com.document_constructor.backend.security;

import com.document_constructor.backend.entity.UserEntity;
import com.document_constructor.backend.repository.UserRepository;
import com.document_constructor.backend.security.jwt.JwtUser;
import com.document_constructor.backend.security.jwt.JwtUserFactory;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class JwtUserDetailService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByEmail(username).orElseThrow(
                () -> new UsernameNotFoundException(String.format(
                        "User with username '%s' not found",
                        username
                )));

        JwtUser jwtUser = JwtUserFactory.create(user);
        return jwtUser;
    }
}
