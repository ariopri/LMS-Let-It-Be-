package helper

import "github.com/ariopri/MassiveProject/models/web/response"

func ToLoginResponse(token string) response.LoginResponse {
	return response.LoginResponse{
		TokenType: "Bearer",
		Token:     token,
	}
}

func ToRegisterResponse(token string, role string) response.RegisterResponse {
	return response.RegisterResponse{
		Token: token,
		Role:  role,
	}
}
