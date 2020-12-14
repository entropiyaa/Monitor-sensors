package com.company.backend.entity;

import com.company.backend.entity.enums.SensorName;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "sensor")
public class Sensor {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private SensorName name;

    @Column(name = "condition")
    private boolean condition;

    @ManyToMany(mappedBy = "sensors")
    List<Examination> examinations;

    public Sensor() {}

    public SensorName getName() {
        return name;
    }

    public void setName(SensorName name) {
        this.name = name;
    }

    public boolean isCondition() {
        return condition;
    }

    public void setCondition(boolean condition) {
        this.condition = condition;
    }
}
