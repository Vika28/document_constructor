package com.document_constructor.backend.controller;

import com.document_constructor.backend.model.Sylabus;
//import com.document_constructor.backend.model.SylabusResponse;
import com.document_constructor.backend.service.SylabusService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SylabusController {
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/createSylabus")
    public Sylabus createSylabus (@RequestBody Sylabus newSylabus) {
        Long id = SylabusService.saveSylabusAndGetId(newSylabus);
        return new Sylabus(id, newSylabus.getDisciplineId(), newSylabus.getSylabusName(), newSylabus.getType());
    }
}
