package com.document_constructor.backend.service;

import com.document_constructor.backend.model.Discipline;
import com.document_constructor.backend.model.Sylabus;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicLong;

@Service
@AllArgsConstructor
public class SylabusService {
    @Autowired
    private final DisciplineService disciplineService;
    private static AtomicLong idGenerator = new AtomicLong(1);

    public Sylabus saveSylabusAndGetId(Sylabus sylabus, Number disciplineId) {
        Discipline discipline = disciplineService.getDisciplinesById(disciplineId);
        Long id = idGenerator.getAndIncrement();
        sylabus.setId(id);
        Set<Sylabus> sylabuses = discipline.getSylabuses();
        sylabuses.add(sylabus);
        return sylabus;
    }
}


