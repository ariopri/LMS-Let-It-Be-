package subjects_service

import (
	"context"
	"database/sql"
	"github.com/ariopri/MassiveProject/helper"
	"github.com/ariopri/MassiveProject/models/domain"
	"github.com/ariopri/MassiveProject/models/web/request"
	"github.com/ariopri/MassiveProject/models/web/response"
	"github.com/ariopri/MassiveProject/repository/subjects_repository"
	"github.com/go-playground/validator/v10"
)

type SubjectsServiceImpl struct {
	SubjectsRepository subjects_repository.SubjectRepository
	DB                 *sql.DB
	Validate           *validator.Validate
}

func NewSubjectsServiceImpl(subjectsRepository subjects_repository.SubjectRepository, db *sql.DB, validate *validator.Validate) SubjectsService {
	return &SubjectsServiceImpl{SubjectsRepository: subjectsRepository, DB: db, Validate: validate}
}

func (s *SubjectsServiceImpl) Create(ctx context.Context, request request.SubjectCreateRequest) response.SubjectsResponse {
	//TODO implement me
	err := s.Validate.Struct(request)
	helper.PanicIfError(err)

	tx, err := s.DB.Begin()
	helper.PanicIfError(err)
	defer helper.CommitOrRollback(tx)

	subject := domain.Subject{
		SubjectName: request.SubjectName,
	}
	subject = s.SubjectsRepository.Save(ctx, tx, subject)

	return helper.ToSubjectsResponse(subject)
}

func (s *SubjectsServiceImpl) Update(ctx context.Context, request request.SubjectUpdateRequest) response.SubjectsResponse {
	//TODO implement me
	err := s.Validate.Struct(request)
	helper.PanicIfError(err)

	tx, err := s.DB.Begin()
	helper.PanicIfError(err)
	defer helper.CommitOrRollback(tx)

	subject, err := s.SubjectsRepository.FindByID(ctx, tx, request.Id)
	helper.PanicIfError(err)

	subject.SubjectName = request.SubjectName

	subject = s.SubjectsRepository.Update(ctx, tx, subject)

	return helper.ToSubjectsResponse(subject)
}

func (s *SubjectsServiceImpl) Delete(ctx context.Context, subjectsId int) {
	//TODO implement me
	tx, err := s.DB.Begin()
	helper.PanicIfError(err)
	defer helper.CommitOrRollback(tx)

	subject, err := s.SubjectsRepository.FindByID(ctx, tx, subjectsId)
	helper.PanicIfError(err)

	s.SubjectsRepository.Delete(ctx, tx, subject)
}

func (s *SubjectsServiceImpl) FindById(ctx context.Context, subjectsId int) response.SubjectsResponse {
	//TODO implement me
	tx, err := s.DB.Begin()
	helper.PanicIfError(err)
	defer helper.CommitOrRollback(tx)

	subject, err := s.SubjectsRepository.FindByID(ctx, tx, subjectsId)
	helper.PanicIfError(err)

	return helper.ToSubjectsResponse(subject)

}

func (s *SubjectsServiceImpl) FindByUsername(ctx context.Context, subjectsName string) response.SubjectsResponse {
	//TODO implement me
	tx, err := s.DB.Begin()
	helper.PanicIfError(err)
	defer helper.CommitOrRollback(tx)

	subject, err := s.SubjectsRepository.FindBySubjectName(ctx, tx, subjectsName)
	helper.PanicIfError(err)

	return helper.ToSubjectsResponse(subject)
}

func (s *SubjectsServiceImpl) FindAll(ctx context.Context) []response.SubjectsResponse {
	//TODO implement me
	tx, err := s.DB.Begin()
	helper.PanicIfError(err)
	defer helper.CommitOrRollback(tx)

	subjects := s.SubjectsRepository.FindAll(ctx, tx)

	return helper.ToSubjectResponses(subjects)
}
