package com.example.demo.dto;

public class LoginResponseDto {
	
	private Integer userKey;
	private String userid;
	private String userName;
	private String userAuth;
	
	public Integer getUserKey() {
		return userKey;
	}
	public void setUserKey(Integer userKey) {
		this.userKey = userKey;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserAuth() {
		return userAuth;
	}
	public void setUserAuth(String userAuth) {
		this.userAuth = userAuth;
	}
	
}
