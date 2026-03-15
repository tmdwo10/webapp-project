package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginRequestDto;
import com.example.demo.dto.UserDto;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
public class LoginController {
	
	private final UserService userService;
	
	public LoginController(UserService userService) {
		this.userService = userService;
	}
	
	@PostMapping("/login")
	public UserDto login(@RequestBody LoginRequestDto loginRequestDto) {
		return userService.login(loginRequestDto);
	}
	
	@GetMapping("/users/{userId}")
	public UserDto findByUserId(@PathVariable String userId) {
		return userService.findByUserId(userId);
	}
}
