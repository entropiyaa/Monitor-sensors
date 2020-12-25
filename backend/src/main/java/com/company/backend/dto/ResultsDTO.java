package com.company.backend.dto;

import com.company.backend.entity.enums.SensorName;

import java.util.EnumMap;
import java.util.Map;

public class ResultsDTO {

    private Map<SensorName, double[]> mapResults = new EnumMap<>(SensorName.class);

    public Map<SensorName, double[]> getMapResults() {
        return mapResults;
    }

    public void setMapResults(Map<SensorName, double[]> mapResults) {
        this.mapResults = mapResults;
    }
}
