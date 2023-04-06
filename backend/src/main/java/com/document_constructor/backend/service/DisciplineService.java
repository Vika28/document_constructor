package com.document_constructor.backend.service;

import com.document_constructor.backend.model.Discipline;
import com.document_constructor.backend.model.Sylabus;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class DisciplineService {
    private AtomicLong idGenerator = new AtomicLong(1);
    private Set<Discipline> setDisciplines = new LinkedHashSet<>();

    public DisciplineService() {

    }

    public Set<Discipline> saveDisciplineAndGetId(Discipline discipline) {
        Long id = idGenerator.getAndIncrement();
        discipline.setSylabuses(new LinkedHashSet<>());
        discipline.setId(id);
        setDisciplines.add(discipline);
        return setDisciplines;
    }

    public Set<Discipline> getAllDisciplines() {
        Set<Discipline> setAllDisciplines = new LinkedHashSet<>();
        for (Discipline discipline: setDisciplines) {
            setAllDisciplines.add(discipline);
        }
        return setAllDisciplines;
    }

    public Discipline getDisciplinesById(Number id) {
        for (Discipline discipline: setDisciplines) {
            if (discipline.getId().longValue() == id.longValue()) {
                return discipline;
            }
        }
        return null;
    }

    public Set<Sylabus> getSylabusesByDisciplineId(Number disciplineId) {
        Set<Sylabus> sylabuses = new HashSet<>();
        for (Discipline discipline: setDisciplines) {
            if (discipline.getId().longValue() == disciplineId.longValue()) {
                sylabuses.addAll(discipline.getSylabuses());
            }
        }
        return sylabuses;
    }
}