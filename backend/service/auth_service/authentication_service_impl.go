package auth_service

import (
	"context"
	"database/sql"
	"fmt"
	"github.com/ariopri/MassiveProject/config"
	"github.com/ariopri/MassiveProject/helper"
	"github.com/ariopri/MassiveProject/models/domain"
	"github.com/ariopri/MassiveProject/models/web/request"
	"github.com/ariopri/MassiveProject/repository/user_repository"
	"github.com/ariopri/MassiveProject/utils"
	"github.com/go-playground/validator/v10"
)

type AuthenticationServiceImpl struct {
	UserRepository user_repository.UserRepository
	DB             *sql.DB
	validate       *validator.Validate
}

func NewAuthenticationService(userRepository user_repository.UserRepository, DB *sql.DB, validate *validator.Validate) AuthenticationService {
	return &AuthenticationServiceImpl{UserRepository: userRepository, DB: DB, validate: validate}
}

func (auth *AuthenticationServiceImpl) Login(ctx context.Context, request request.LoginCreateRequest) (string, error) {
	//TODO implement me
	err := auth.validate.Struct(request)
	helper.PanicIfError(err)

	tx, err := auth.DB.Begin()
	helper.PanicIfError(err)
	defer helper.CommitOrRollback(tx)

	new_user, err_user := auth.UserRepository.FindByUsername(ctx, tx, request.Username)
	if err_user != nil {
		return "", fmt.Errorf("username not found")
	}
	config, _ := config.LoadConfig(".")

	verify_error := utils.VerifyPassword(new_user.Password, request.Password)
	if verify_error != nil {
		return "", fmt.Errorf("password not match")
	}

	token, err_token := utils.GenerateToken(config.TokenExpiresIn, new_user.Id, config.TokenSecret)
	helper.PanicIfError(err_token)

	return token, nil
}

func (auth *AuthenticationServiceImpl) Register(ctx context.Context, request request.UserCreateRequest) {
	//TODO implement me
	err := auth.validate.Struct(request)
	helper.PanicIfError(err)

	tx, err := auth.DB.Begin()
	helper.PanicIfError(err)
	defer helper.CommitOrRollback(tx)

	hashedPassword, err := utils.HashPassword(request.Password)
	helper.PanicIfError(err)

	user := domain.User{
		FirstName: request.FirstName,
		LastName:  request.LastName,
		Username:  request.Username,
		Email:     request.Email,
		Password:  hashedPassword,
	}

	auth.UserRepository.Save(ctx, tx, user)
}
