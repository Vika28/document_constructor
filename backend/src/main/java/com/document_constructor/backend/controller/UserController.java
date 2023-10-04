package com.document_constructor.backend.controller;

import com.document_constructor.backend.dto.UserDTO;
import com.document_constructor.backend.entity.UserEntity;
import com.document_constructor.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping(path = {"/api/users"})
public class UserController {
    private final UserService userService;

    @PostMapping(path = "/register")
    public ResponseEntity<UserDTO> register(@RequestBody UserDTO user) {
        return new ResponseEntity<>(userService.register(user), HttpStatus.CREATED);
    }
}
