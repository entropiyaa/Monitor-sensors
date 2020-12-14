package com.company.backend.repository;

import com.company.backend.entity.Examination;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExaminationRepository extends CrudRepository<Examination, Long> {
}
