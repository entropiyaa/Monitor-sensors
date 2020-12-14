package com.company.backend.service.impl;

import com.company.backend.entity.Examination;
import com.company.backend.entity.enums.Status;
import com.company.backend.repository.ExaminationRepository;
import com.company.backend.service.ExaminationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ExaminationServiceImpl implements ExaminationService {

    private ExaminationRepository examinationRepository;

    @Autowired
    public ExaminationServiceImpl(ExaminationRepository examinationRepository) {
        this.examinationRepository = examinationRepository;
    }

    @Override
    public Examination save(Examination examination) {
        examination.setStatus(Status.REGISTERED);
        examination.setDate(new Date());
        return examinationRepository.save(examination);
    }

    @Override
    public Examination findById(Long id) {
        Optional<Examination> optionalExamination = examinationRepository.findById(id);
        return optionalExamination.orElse(null);
    }

    @Override
    public List<Examination> findAllByUserId(Long id) {
        return examinationRepository.findAllByUserId(id);
    }
}
