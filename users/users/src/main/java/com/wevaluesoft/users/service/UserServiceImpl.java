package com.wevaluesoft.users.service;

import com.wevaluesoft.users.model.User;
import com.wevaluesoft.users.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

//    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.getUserById(id);
    }
//
    @Override
    @Transactional
    public void updateUser(Long id, User updatedUser) {
        if (userRepository.existsById(id)) {
            updatedUser.setId(id);
            userRepository.save(updatedUser);
        }
    }
//
    @Override
    @Transactional
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
//
    @Override
    public List<User> findByFirstname(String firstname) {
        return userRepository.findByFirstname(firstname);
    }
}
