package com.document_constructor.backend.controller;

import com.document_constructor.backend.dto.TemplateDTO;
import com.document_constructor.backend.service.TemplateService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping(path="/api/templates/{templateType}")
public class TemplateController {
    private final TemplateService templateService;

    @GetMapping()
    public List<TemplateDTO> findAll(@PathVariable String templateType) {
        return templateService.findAll(templateType);
    }

    @GetMapping("/{id}")
    public TemplateDTO findById(@PathVariable Long id) {
        return templateService.findById(id);
    }
}
