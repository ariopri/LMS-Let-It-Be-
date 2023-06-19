package helper

import "github.com/ariopri/MassiveProject/models/web/response"

func ToLoginResponse(token string) response.LoginResponse {
	return response.LoginResponse{
		TokenType: "Bearer",
		Token:     token,
	}
}
