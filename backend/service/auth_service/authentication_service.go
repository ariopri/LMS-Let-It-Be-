package auth_service

import (
	"context"
	"github.com/ariopri/MassiveProject/models/web/request"
)

type AuthenticationService interface {
	Login(ctx context.Context, request request.LoginCreateRequest) (string, error)
	Register(ctx context.Context, createRequest request.UserCreateRequest)
}
