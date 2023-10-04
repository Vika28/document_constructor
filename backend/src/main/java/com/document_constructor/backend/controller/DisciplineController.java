package com.document_constructor.backend.controller;

import com.document_constructor.backend.dto.DisciplineDTO;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.document_constructor.backend.service.DisciplineService;

import java.util.List;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping(path="/api/disciplines")
public class DisciplineController {
    private final DisciplineService disciplineService;

    @PostMapping
    public DisciplineDTO create(@RequestBody DisciplineDTO discipline) {
        return disciplineService.create(discipline);
    }

    @GetMapping
    public List<DisciplineDTO> findAll() {
        return disciplineService.findAll();
    }
}
