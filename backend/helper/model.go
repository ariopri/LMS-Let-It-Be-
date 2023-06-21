package helper

import "github.com/ariopri/MassiveProject/models/web/response"

func ToLoginResponse(token, role string) response.LoginResponse {
	return response.LoginResponse{
		TokenType: "Bearer",
		Token:     token,
		Role:      role,
	}
}
