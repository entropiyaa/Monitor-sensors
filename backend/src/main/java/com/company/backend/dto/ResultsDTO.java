package com.company.backend.dto;

import com.company.backend.entity.enums.SensorName;

import java.util.EnumMap;
import java.util.Map;

public class ResultsDTO {

//    private Map<SensorName, double[]> mapResults = new EnumMap<>(SensorName.class);
//
//    public Map<SensorName, double[]> getMapResults() {
//        return mapResults;
//    }
//
//    public void setMapResults(Map<SensorName, double[]> mapResults) {
//        this.mapResults = mapResults;
//    }
    private SensorName name;
    private double[] results = new double[10];

    public ResultsDTO() {}

    public ResultsDTO(SensorName name, double[] results) {
        this.name = name;
        this.results = results;
    }

    public SensorName getName() {
        return name;
    }

    public void setName(SensorName name) {
        this.name = name;
    }

    public double[] getResults() {
        return results;
    }

    public void setResults(double[] results) {
        this.results = results;
    }
}
