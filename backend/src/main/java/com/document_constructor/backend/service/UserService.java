package com.document_constructor.backend.service;

import com.document_constructor.backend.dto.UserDTO;
import com.document_constructor.backend.entity.Role;
import com.document_constructor.backend.entity.UserEntity;
import com.document_constructor.backend.mapper.UserMapper;
import com.document_constructor.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;
    private UserMapper userMapper;
    private BCryptPasswordEncoder passwordEncoder;

    public UserDTO register(UserDTO user) {
        UserEntity userEntity = userMapper.toEntity(user);
        userEntity.setPassword(passwordEncoder.encode(user.getPassword()));
        userEntity.setRole(Role.USER);
        return userMapper.toDTO(userRepository.save(userEntity));
    }

    public UserEntity findByEmail(String username) {
        return userRepository.findByEmail(username).orElseThrow();
    }
}
