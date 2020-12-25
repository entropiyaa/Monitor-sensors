package com.company.backend.service;

import com.company.backend.entity.Sensor;

public interface SensorService {
    Sensor getSensorById(Long id);
    double[] generateResults(Sensor s);
}
