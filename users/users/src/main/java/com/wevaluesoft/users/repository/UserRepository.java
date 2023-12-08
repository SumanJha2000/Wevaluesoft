package com.wevaluesoft.users.repository;

import com.wevaluesoft.users.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    void deleteById(Long id);

    boolean existsById(Long id);

    List<User> findByFirstname(String firstname);

    Optional<User> getUserById(Long id);
//    User findById(long id);
//
//    // Delete
//    void deleteById(long id);
//
//    // View (Find all)
//    List<User> findAll();
}
