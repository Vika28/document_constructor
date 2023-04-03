package com.document_constructor.backend.controller;

import com.document_constructor.backend.model.Discipline;
import com.document_constructor.backend.model.DisciplineResponse;
import org.springframework.web.bind.annotation.*;
import com.document_constructor.backend.service.DisciplineService;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class DisciplineController {
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/createDiscipline")

    public DisciplineResponse createDiscipline (@RequestBody Discipline newDiscipline) {

        Long id = DisciplineService.saveDisciplineAndGetId(newDiscipline);

        // Create a new instance of DisciplineResponse with the ID and name
        DisciplineResponse response = new DisciplineResponse(id, newDiscipline.getDisciplineName());

        return response;
    }

}
