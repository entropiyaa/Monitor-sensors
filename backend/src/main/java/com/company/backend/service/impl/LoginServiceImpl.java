package com.company.backend.service.impl;

import com.company.backend.entity.Login;
import com.company.backend.entity.User;
import com.company.backend.repository.LoginRepository;
import com.company.backend.service.LoginService;
import com.company.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("customUserDetailsService")
public class LoginServiceImpl implements UserDetailsService, LoginService {

    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private LoginRepository loginRepository;
    private UserService userService;

    @Autowired
    public LoginServiceImpl(LoginRepository loginRepository, UserService userService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.loginRepository = loginRepository;
        this.userService = userService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    @Override
    public Login findLoginByEmail(String email) {
        Optional<Login> optionalLogin = loginRepository.findByEmail(email);
        return optionalLogin.orElse(null);
    }

    @Override
    public User findUserByEmail(String email) {
        Optional<Login> optionalLogin = loginRepository.findByEmail(email);
        return optionalLogin.map(Login::getUser).orElse(null);
    }

    @Override
    public List<Login> findAll() {
        List<Login> logins = loginRepository.findAll();
        if(!logins.isEmpty()) {
            for (Login login : logins) {
                login.setPassword("");
            }
        }
        return logins;
    }

    @Override
    public Login save(Login login) {
        login.setPassword(bCryptPasswordEncoder.encode(login.getPassword()));
        User user = userService.save(login.getUser());
        login.setUser(user);
        Login newLogin = loginRepository.save(login);
        newLogin.setPassword("");
        return newLogin;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Login login = findLoginByEmail(email);
        if (login == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(
                login.getEmail(), login.getPassword(), getAuthority(login.getUser()));
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole()));
        return authorities;
    }
}

