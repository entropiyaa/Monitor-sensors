package com.company.backend.service;

import com.company.backend.dto.ResultsDTO;
import com.company.backend.entity.Examination;
import com.company.backend.entity.SetupSensor;

import java.util.List;

public interface ExaminationService {
    Examination save(Examination examination);
    Examination findById(Long id);
    Examination register(Examination examination);
    List<Examination> findAllByUserId(Long id);
    List<ResultsDTO> startExamination(Long id);
    void setup(SetupSensor setupSensor);
}
