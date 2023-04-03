package com.document_constructor.backend.controller;

import com.document_constructor.backend.model.Discipline;
import org.springframework.web.bind.annotation.*;
import com.document_constructor.backend.service.DisciplineService;

@RestController
public class DisciplineController {
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/createDiscipline")

    public Discipline createDiscipline (@RequestBody Discipline newDiscipline) {
        Long id = DisciplineService.saveDisciplineAndGetId(newDiscipline);
        return new Discipline(id, newDiscipline.getName());
    }

}
