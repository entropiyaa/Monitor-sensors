package com.company.backend.service.impl;

import com.company.backend.dto.ResultsDTO;
import com.company.backend.entity.Examination;
import com.company.backend.entity.Sensor;
import com.company.backend.entity.SetupSensor;
import com.company.backend.entity.enums.Status;
import com.company.backend.repository.ExaminationRepository;
import com.company.backend.service.ExaminationService;
import com.company.backend.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ExaminationServiceImpl implements ExaminationService {

    private ExaminationRepository examinationRepository;

    private SensorService sensorService;

    @Autowired
    public ExaminationServiceImpl(ExaminationRepository examinationRepository, SensorService sensorService) {
        this.examinationRepository = examinationRepository;
        this.sensorService = sensorService;
    }

    public Examination register(Examination examination) {
        examination.setStatus(Status.REGISTERED);
        examination.setDate(new Date());
        return save(examination);
    }

    @Override
    public Examination save(Examination examination) {
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

    @Override
    public List<ResultsDTO> startExamination(Long id) {
        Examination examination = findById(id);
//        ResultsDTO resultsDTO = new ResultsDTO();
        List<ResultsDTO> resultsList = new ArrayList<>();
        double[] results;
        for(Sensor s: examination.getSensors()) {
             results = sensorService.generateResults(s);
//             resultsDTO.getMapResults().put(s.getName(), results);
            ResultsDTO resultsDTO = new ResultsDTO(s.getName(), results);
            resultsList.add(resultsDTO);
        }
        finishExamination(examination);
        return resultsList;
    }

    public void finishExamination(Examination examination) {
        examination.setStatus(Status.COMPLETED);
        save(examination);
    }

    @Override
    public void setup(SetupSensor setupSensor) {
        Examination examination = findById(setupSensor.getExamination());
        if (examination != null) {
            for (Long id : setupSensor.getSensors()) {
                Sensor sensor = sensorService.getSensorById(id);
                examination.getSensors().add(sensor);
            }
            save(examination);
        }
    }
}
