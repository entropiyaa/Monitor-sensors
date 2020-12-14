package com.company.backend.controller;

import com.company.backend.entity.Examination;
import com.company.backend.service.ExaminationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/examinations")
public class ExaminationController {

    private ExaminationService examinationService;

    @Autowired
    public ExaminationController(ExaminationService examinationService) {
        this.examinationService = examinationService;
    }

    @PostMapping(value = "/register")
    public Examination registerExamination(@RequestBody Examination examination) {
        return examinationService.save(examination);
    }

    @GetMapping(value = "/{examId}")
    public Examination getExamination(@PathVariable(name = "examId") Long id) {
        return examinationService.findById(id);
    }

}
