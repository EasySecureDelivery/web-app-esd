package com.upc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "shipment")
public class Shipment {
    @Id
    @Column(name = "id", columnDefinition = "INT UNSIGNED not null")
    private Long id;

    @Size(max = 45)
    @NotNull
    @Column(name = "Name", nullable = false, length = 45)
    private String name;

    @Size(max = 8)
    @NotNull
    @Column(name = "Dni", nullable = false, length = 8)
    private String dni;

    @Size(max = 100)
    @NotNull
    @Column(name = "Contents", nullable = false, length = 100)
    private String contents;

    @Size(max = 10)
    @NotNull
    @Column(name = "Weight", nullable = false, length = 10)
    private String weight;

    @Size(max = 9)
    @NotNull
    @Column(name = "Code", nullable = false, length = 9)
    private String code;

    @Size(max = 20)
    @NotNull
    @Column(name = "TicorInv", nullable = false, length = 20)
    private String ticorInv;

    @Size(max = 45)
    @NotNull
    @Column(name = "Email", nullable = false, length = 45)
    private String email;

    @Size(max = 45)
    @NotNull
    @Column(name = "CompTrans", nullable = false, length = 45)
    private String compTrans;

    @Size(max = 45)
    @NotNull
    @Column(name = "Date", nullable = false, length = 45)
    private String date;

    @Size(max = 45)
    @NotNull
    @Column(name = "Status", nullable = false, length = 45)
    private String status;

    @Size(max = 9)
    @NotNull
    @Column(name = "Contact", nullable = false, length = 9)
    private String contact;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTicorInv() {
        return ticorInv;
    }

    public void setTicorInv(String ticorInv) {
        this.ticorInv = ticorInv;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCompTrans() {
        return compTrans;
    }

    public void setCompTrans(String compTrans) {
        this.compTrans = compTrans;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

}