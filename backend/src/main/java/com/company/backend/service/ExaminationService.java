package com.company.backend.service;

import com.company.backend.entity.Examination;

public interface ExaminationService {
    Examination save(Examination examination);
    Examination findById(Long id);
}
