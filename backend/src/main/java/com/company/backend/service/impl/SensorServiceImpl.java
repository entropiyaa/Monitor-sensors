package com.company.backend.service.impl;

import com.company.backend.entity.Sensor;
import com.company.backend.repository.SensorRepository;
import com.company.backend.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SensorServiceImpl implements SensorService {

    private SensorRepository sensorRepository;

    @Autowired
    public SensorServiceImpl(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    public Sensor getSensorById(Long id) {
        Optional<Sensor> optionalSensor = sensorRepository.findById(id);
        return optionalSensor.orElse(null);
    }

    public double[] generateResults(Sensor s) {
        if(!s.isCondition()) {
            return null;
        }
        double[] results = new double[10];
        for (int i = 0; i < results.length; i++) {
            results[i] = Math.random() * (s.getMax() - s.getMin()) + s.getMin();
        }
        return results;
    }
}
