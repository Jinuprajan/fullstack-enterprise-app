package com.enterprise.app.service;


import com.enterprise.app.dto.LoginRequest;
import com.enterprise.app.dto.LoginResponse;
import org.springframework.stereotype.Service;


@Service
public class AuthService {


    public LoginResponse login(LoginRequest request){


        if(
                request.getEmail().equals("admin@gmail.com")
                        &&
                        request.getPassword().equals("12345")
        ){

            return new LoginResponse(
                    "Jinoy",
                    "ADMIN",
                    "Login Success"
            );

        }


        return new LoginResponse(
                null,
                null,
                "Invalid Login"
        );


    }


}