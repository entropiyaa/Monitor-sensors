package com.company.backend.entity;

import java.util.List;

public class SetupSensor {

    private Long examination;
    private List<Long> sensors;

    public Long getExamination() {
        return examination;
    }

    public void setExamination(Long examination) {
        this.examination = examination;
    }

    public List<Long> getSensors() {
        return sensors;
    }

    public void setSensors(List<Long> sensors) {
        this.sensors = sensors;
    }
}
