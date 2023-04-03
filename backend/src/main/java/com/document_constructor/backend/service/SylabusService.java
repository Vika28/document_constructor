package com.document_constructor.backend.service;

import com.document_constructor.backend.model.Sylabus;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

public class SylabusService {
    private static AtomicLong idGenerator = new AtomicLong(1);
    private static Map<Long, Sylabus> sylabusMap = new HashMap<>();

    public static Long saveSylabusAndGetId(Sylabus sylabus) {
        Long id = idGenerator.getAndIncrement();
        sylabus.setId(id);
        sylabusMap.put(id, sylabus);
        return id;
    }
}


