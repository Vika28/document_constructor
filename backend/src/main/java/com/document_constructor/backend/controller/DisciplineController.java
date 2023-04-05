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
@AllArgsConstructor
public class DisciplineController {
    @Autowired
    private final DisciplineService disciplineService;
    @Autowired
    private final SylabusService sylabusService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/createDiscipline")
    public Set<Discipline> createDiscipline (@RequestBody Discipline newDiscipline) {
        return disciplineService.saveDisciplineAndGetId(newDiscipline);
    }

    @GetMapping("/disciplines")
    @CrossOrigin(origins = "http://localhost:3000")
    public Set<Discipline> getDisciplines() {
        return disciplineService.getAllDisciplines();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/createSylabus")
    public void createSylabus (@RequestBody Sylabus newSylabus, @RequestParam Number disciplineId) {
        sylabusService.saveSylabusAndGetId(newSylabus, disciplineId);
    }

    @GetMapping("/sylabuses")
    public Set<Sylabus> getSylabuses(@RequestParam Number disciplineId) {
        return disciplineService.getSylabusesByDisciplineId(disciplineId);
    }

}
