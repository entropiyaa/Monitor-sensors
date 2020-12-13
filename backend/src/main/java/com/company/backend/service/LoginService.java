package com.company.backend.service;

import com.company.backend.entity.Login;
import com.company.backend.entity.User;

import java.util.List;

public interface LoginService {
    Login findLoginByEmail(String email);
    User findUserByEmail(String email);
    List<Login> findAll();
    Login save(Login login);
}
