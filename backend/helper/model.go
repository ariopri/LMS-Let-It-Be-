package helper

import (
	"github.com/ariopri/MassiveProject/models/domain"
	"github.com/ariopri/MassiveProject/models/web/response"
)

func ToLoginResponse(token, role string) response.LoginResponse {
	return response.LoginResponse{
		TokenType: "Bearer",
		Token:     token,
		Role:      role,
	}
}

func ToSubjectsResponse(subjects domain.Subject) response.SubjectsResponse {
	return response.SubjectsResponse{
		Id:          int(subjects.Id),
		SubjectName: subjects.SubjectName,
	}
}
