package com.document_constructor.backend.controller;

import com.document_constructor.backend.model.Sylabus;
import com.document_constructor.backend.model.SylabusResponse;
import com.document_constructor.backend.service.SylabusService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SylabusController {
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/createSylabus")
    public SylabusResponse createSylabus (@RequestBody Sylabus newSylabus) {

        Long id = SylabusService.saveSylabusAndGetId(newSylabus);

        // Create new instance of DisciplineResponse with the ID and name
        SylabusResponse response = new SylabusResponse(id, newSylabus.getDisciplineId(), newSylabus.getSylabusName(), newSylabus.getType());

        return response;
    }
}
