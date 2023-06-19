package user_repository

import (
	"context"
	"database/sql"
	"github.com/ariopri/MassiveProject/models/domain"
)

type UserRepository interface {
	Save(ctx context.Context, tx *sql.Tx, user domain.User) domain.User
	Update(ctx context.Context, tx *sql.Tx, user domain.User) domain.User
	Delete(ctx context.Context, tx *sql.Tx, user domain.User)
	FindByID(ctx context.Context, tx *sql.Tx, userId int) (domain.User, error)
	FindByUsername(ctx context.Context, tx *sql.Tx, username string) (domain.User, error)
	FindAll(ctx context.Context, tx *sql.Tx) []domain.User
}
