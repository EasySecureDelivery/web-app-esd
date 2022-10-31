package com.upc.repository;

import org.springframework.data.repository.CrudRepository;
import com.upc.model.User;
public interface UserReposiroty extends CrudRepository<User, Integer>{


}