package com.company.backend.service;

import com.company.backend.entity.Examination;

import java.util.List;

public interface ExaminationService {
    Examination save(Examination examination);
    Examination findById(Long id);
    List<Examination> findAllByUserId(Long id);
}
