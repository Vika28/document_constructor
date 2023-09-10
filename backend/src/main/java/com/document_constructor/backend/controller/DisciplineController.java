package com.document_constructor.backend.controller;

import com.document_constructor.backend.model.Discipline;
import com.document_constructor.backend.model.Sylabus;
import com.document_constructor.backend.service.SylabusService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.document_constructor.backend.service.DisciplineService;

import java.util.Set;

@RestController
@CrossOrigin
@RequestMapping(path="/api/disciplines")
@AllArgsConstructor
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
