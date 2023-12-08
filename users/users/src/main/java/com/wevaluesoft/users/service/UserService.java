package com.wevaluesoft.users.service;

import com.wevaluesoft.users.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public User saveUser(User user);

    public List<User> getAllUsers();

    Optional<User> getUserById(Long id);
//
//
    void updateUser(Long id, User updatedUser);
//
    public void deleteUser(Long id);
//
//    // Additional custom methods can be added here
//
//    // Example: Find user by username
    List<User> findByFirstname(String firstname);
}
