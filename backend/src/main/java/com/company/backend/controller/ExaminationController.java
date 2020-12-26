package com.company.backend.controller;

import com.company.backend.dto.ResultsDTO;
import com.company.backend.entity.Examination;
import com.company.backend.entity.SetupSensor;
import com.company.backend.service.ExaminationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/examinations")
@PreAuthorize("isAuthenticated()")
public class ExaminationController {

    private ExaminationService examinationService;

    @Autowired
    public ExaminationController(ExaminationService examinationService) {
        this.examinationService = examinationService;
    }

    @PostMapping(value = "/register")
    public Examination registerExamination(@RequestBody Examination examination) {
        return examinationService.register(examination);
    }

    @GetMapping(value = "/{examId}")
    public Examination getExamination(@PathVariable(name = "examId") Long id) {
        return examinationService.findById(id);
    }

    @GetMapping(value = "/user/{userId}")
    public List<Examination> getExaminations(@PathVariable(name = "userId") Long id) {
        return examinationService.findAllByUserId(id);
    }

    @PutMapping(value = "/start/{examId}")
    public ResultsDTO startExamination(@PathVariable(name = "examId") Long id) {
        return examinationService.startExamination(id);
    }

    @PostMapping(value = "setup")
    public void setup(@RequestBody SetupSensor setupSensor) {
        examinationService.setup(setupSensor);
    }
}
