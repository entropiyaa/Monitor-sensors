package com.company.backend.repository;

import com.company.backend.entity.Sensor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SensorRepository extends CrudRepository<Sensor, Long> {
}
