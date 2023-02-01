package com.document_constructor.backend.controller;

import com.document_constructor.backend.model.Discipline;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DisciplineController {

    @PostMapping("/createDiscipline")
    public Discipline createDiscipline (@RequestBody Discipline newDiscipline) {
        return newDiscipline;
    }
}
