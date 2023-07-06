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

func ToSubjectsResponse(subject domain.Subject) response.SubjectsResponse {
	return response.SubjectsResponse{
		Id:          subject.Id,
		SubjectName: subject.SubjectName,
	}
}

func ToSubjectResponses(subject []domain.Subject) []response.SubjectsResponse {
	var subjectResponses []response.SubjectsResponse
	for _, subject := range subject {
		subjectResponses = append(subjectResponses, ToSubjectsResponse(subject))
	}
	return subjectResponses
}
