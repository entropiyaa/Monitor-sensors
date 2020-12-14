package com.company.backend.controller;

import com.company.backend.entity.SetupSensor;
import com.company.backend.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sensors")
public class SensorController {

    private SensorService sensorService;

    @Autowired
    public SensorController(SensorService sensorService) {
        this.sensorService = sensorService;
    }

    @PostMapping(value = "setup")
    public void setupSensors(@RequestBody SetupSensor setupSensor) {
        this.sensorService.setup(setupSensor);
    }
}
