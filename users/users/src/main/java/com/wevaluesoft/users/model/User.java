package com.wevaluesoft.users.model;
import jakarta.persistence.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Random;


@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstname;
    private String lastname;
    private String documentNo;
    private String status;
    private String role;
    private String password;
    private String email;
    private String telephone;

    // Constructors

//    public User() {
//    }

    public User() {
        // Generate a random number for documentNo during object instantiation
        this.documentNo = generateRandomNumber();
    }

    public User(String firstname, String lastname, String documentNo, String status, String role, String password, String email, String telephone) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.documentNo = documentNo;
        this.status = status;
        this.role = role;
        this.password = password;
        this.email = email;
        this.telephone = telephone;
    }


    private String generateRandomNumber() {
        // Generate a random 6-digit number
        Random random = new Random();
        int randomNumber = 100_000 + random.nextInt(900_000);
        return String.valueOf(randomNumber);
    }
    // Getters and setters

    @Transient
    private static final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void setPassword(String password) {
        this.password = passwordEncoder.encode(password);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getDocumentNo() {
        return documentNo;
    }

    public void setDocumentNo(String documentNo) {
        this.documentNo = documentNo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

//    public void setPassword(String password) {
//        this.password = password;
//    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    // toString() method

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", documentNo='" + documentNo + '\'' +
                ", status='" + status + '\'' +
                ", role='" + role + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", telephone='" + telephone + '\'' +
                '}';
    }
}
