package com.company.backend.service;

import com.company.backend.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
}
