package com.document_constructor.backend.controller;

import com.document_constructor.backend.dto.DocumentDTO;
import com.document_constructor.backend.service.DocumentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<DocumentDTO> create(@RequestBody DocumentDTO document, @PathVariable Long disciplineId) {
        return new ResponseEntity<>(documentService.create(document, disciplineId), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<DocumentDTO> findByID(@PathVariable Long id) {
        return new ResponseEntity<>(documentService.findById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<DocumentDTO>> findAll(@PathVariable Long disciplineId) {
        return new ResponseEntity<>(documentService.findAll(disciplineId), HttpStatus.OK);
    }

    @PostMapping("/{id}")
    public ResponseEntity<DocumentDTO> addHeader(@RequestBody DocumentDTO documentDTO, @PathVariable Long id) {
        return ResponseEntity.ok(documentService.addHeader(documentDTO, id));
    }
}
