package subjects_service

import (
	"context"
	"github.com/ariopri/MassiveProject/models/web/request"
	"github.com/ariopri/MassiveProject/models/web/response"
)

type SubjectsService interface {
	Create(ctx context.Context, request request.SubjectCreateRequest) response.SubjectsResponse
	Update(ctx context.Context, request request.SubjectUpdateRequest) response.SubjectsResponse
	Delete(ctx context.Context, subjectId int)
	FindById(ctx context.Context, subjectId int) response.SubjectsResponse
	FindByUsername(ctx context.Context, subjectName string) response.SubjectsResponse
	FindAll(ctx context.Context) []response.SubjectsResponse
}
