package com.upc.service;

import com.upc.model.User;
import java.util.List;

public interface UserService {

    public abstract User createUser(User user);

    public abstract void updateUser(User user);

    public abstract User getUser(int id);

    public abstract List<User> getUsers();

    public abstract void deleteUser(int id);

    public abstract boolean isUserExist(int id);
}
