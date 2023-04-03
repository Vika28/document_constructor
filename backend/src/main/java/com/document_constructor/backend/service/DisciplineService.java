package com.document_constructor.backend.service;

import com.document_constructor.backend.model.Discipline;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

public class DisciplineService {
    private static AtomicLong idGenerator = new AtomicLong(1);
    private static Map<Long, Discipline> disciplineMap = new HashMap<>();

    public static Long saveDisciplineAndGetId(Discipline discipline) {
        Long id = idGenerator.getAndIncrement();
        discipline.setId(id);
        disciplineMap.put(id, discipline);
        return id;
    }
}