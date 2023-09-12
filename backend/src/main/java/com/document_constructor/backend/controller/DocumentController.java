package com.document_constructor.backend.controller;

//import com.document_constructor.backend.service.DocumentService;
import com.document_constructor.backend.dto.DocumentDTO;
import com.document_constructor.backend.model.Document;
import com.document_constructor.backend.service.DocumentService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping(path="/api/disciplines/{disciplineId}/documents")
public class DocumentController {

    private final DocumentService documentService;

    @PostMapping
    public DocumentDTO create(@RequestBody DocumentDTO document, @PathVariable Long disciplineId) {
        return documentService.create(document, disciplineId);
    }

    @GetMapping(path="/{id}")
    public DocumentDTO findById(@PathVariable Long id) {
        return documentService.findById(id);
    }

    @GetMapping
    public List<DocumentDTO> findAll(){
        return documentService.getAll();
    }


}

