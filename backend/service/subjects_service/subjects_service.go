package subjects_service

import (
	"context"
	"github.com/ariopri/MassiveProject/models/web/request"
	"github.com/ariopri/MassiveProject/models/web/response"
)

type SubjectsService interface {
	Create(ctx context.Context, request request.SubjectCreateRequest) response.SubjectsResponse
	Update(ctx context.Context, request request.SubjectUpdateRequest) response.SubjectsResponse
	Delete(ctx context.Context, subjectsId int)
	FindById(ctx context.Context, subjectsId int) response.SubjectsResponse
	FindByUsername(ctx context.Context, subjectsName string) response.SubjectsResponse
	FindAll(ctx context.Context) []response.SubjectsResponse
}
