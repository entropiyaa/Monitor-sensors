package com.company.backend.service;

import com.company.backend.entity.User;

import java.util.List;

public interface UserService {
    User findById(Long userId);
    List<User> findAll();
    User save(User user);
}
