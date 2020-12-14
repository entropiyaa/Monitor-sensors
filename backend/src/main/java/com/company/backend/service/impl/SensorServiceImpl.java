package com.company.backend.service.impl;

import com.company.backend.entity.Examination;
import com.company.backend.entity.Sensor;
import com.company.backend.entity.SetupSensor;
import com.company.backend.repository.SensorRepository;
import com.company.backend.service.ExaminationService;
import com.company.backend.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SensorServiceImpl implements SensorService {

    private ExaminationService examinationService;
    private SensorRepository sensorRepository;

    @Autowired
    public SensorServiceImpl(ExaminationService examinationService, SensorRepository sensorRepository) {
        this.examinationService = examinationService;
        this.sensorRepository = sensorRepository;
    }

    public Sensor getSensorById(Long id) {
        Optional<Sensor> optionalSensor = sensorRepository.findById(id);
        return optionalSensor.orElse(null);
    }

    @Override
    public void setup(SetupSensor setupSensor) {
        Examination examination = examinationService.findById(setupSensor.getExamination());
        if (examination != null) {
            for (Long id : setupSensor.getSensors()) {
                Sensor sensor = getSensorById(id);
                examination.getSensors().add(sensor);
                examinationService.save(examination);
            }
        }
    }
}
