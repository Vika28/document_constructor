package com.document_constructor.backend.controller;

import com.document_constructor.backend.dto.AuthenticationRequestDTO;
import com.document_constructor.backend.dto.UserDTO;
import com.document_constructor.backend.entity.UserEntity;
import com.document_constructor.backend.security.jwt.JwtTokenProvider;
import com.document_constructor.backend.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/auth/")
public class AuthenticationController {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;

    public AuthenticationController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity login(@RequestBody AuthenticationRequestDTO authenticationRequestDTO) {
        try {
            String username = authenticationRequestDTO.getEmail();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, authenticationRequestDTO.getPassword()));
            UserEntity user = userService.findByEmail(username);

            if (user == null) {
                throw new UsernameNotFoundException("User with username " + username + "not found");
            }

            String token = jwtTokenProvider.createToken(username, List.of(user.getRole()));

            Map<Object, Object> response = new HashMap<>();
            response.put("username", username);
            response.put("token", token);
            return ResponseEntity.ok(response);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username or password");
        }
    }
}
