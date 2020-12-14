package com.company.backend.service;

import com.company.backend.entity.Sensor;
import com.company.backend.entity.SetupSensor;

public interface SensorService {
    Sensor getSensorById(Long id);
    void setup(SetupSensor setupSensor);
}
