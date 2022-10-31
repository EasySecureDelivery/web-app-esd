package com.upc.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class User {
    @Id
    @Column(name = "id", columnDefinition = "INT UNSIGNED not null")
    private Integer id;

    @Size(max = 45)
    @NotNull
    @Column(name = "Username", nullable = false, length = 45)
    private String username;

    @Size(max = 45)
    @NotNull
    @Column(name = "Password", nullable = false, length = 45)
    private String password;

    @Size(max = 45)
    @NotNull
    @Column(name = "Name", nullable = false, length = 45)
    private String name;

    @Size(max = 45)
    @NotNull
    @Column(name = "Number", nullable = false, length = 45)
    private String number;

    @Size(max = 45)
    @NotNull
    @Column(name = "Email", nullable = false, length = 45)
    private String email;

    @Size(max = 45)
    @NotNull
    @Column(name = "Location", nullable = false, length = 45)
    private String location;

    @Size(max = 45)
    @NotNull
    @Column(name = "CompanyName", nullable = false, length = 45)
    private String companyName;

    @Size(max = 45)
    @NotNull
    @Column(name = "Ruc", nullable = false, length = 45)
    private String ruc;

    @Size(max = 45)
    @NotNull
    @Column(name = "Sector", nullable = false, length = 45)
    private String sector;

    @Size(max = 45)
    @NotNull
    @Column(name = "Address", nullable = false, length = 45)
    private String address;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getRuc() {
        return ruc;
    }

    public void setRuc(String ruc) {
        this.ruc = ruc;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString()
    {
        return "User [id=" + id + ", username=" + username + ", password=" + password + ", name=" + name+ "," +
                "name="+name+", number="+number+", email="+email+", location="+location+"," +
                "companyName="+companyName+", ruc="+ruc+", sector="+sector+", address="+address+"]";
    }

}