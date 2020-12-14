package com.company.backend.repository;

import com.company.backend.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findById(Long userId);
    List<User> findAll();
    User save(User user);
    void deleteById(Long userId);
}
