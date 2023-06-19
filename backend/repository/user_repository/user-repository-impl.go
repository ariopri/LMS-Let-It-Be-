package user_repository

import (
	"context"
	"database/sql"
	"errors"
	"github.com/ariopri/MassiveProject/helper"
	"github.com/ariopri/MassiveProject/models/domain"
)

type UserRepositoryImpl struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) UserRepository {
	return &UserRepositoryImpl{
		db: db,
	}
}

func (u *UserRepositoryImpl) Save(ctx context.Context, tx *sql.Tx, user domain.User) domain.User {
	//TODO implement me
	SQL := "INSERT INTO users (firstname, lastname, username, email, password, role, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
	result, err := tx.ExecContext(ctx, SQL, user.FirstName, user.LastName, user.UserName, user.Email, user.Password, user.Role, &user.CreatedAt, &user.UpdatedAt)
	helper.PanicIfError(err)

	id, err := result.LastInsertId()
	helper.PanicIfError(err)
	user.Id = int(id)

	return user
}

func (u *UserRepositoryImpl) Update(ctx context.Context, tx *sql.Tx, user domain.User) domain.User {
	//TODO implement me
	SQL := "UPDATE users SET firstname = ?, lastname = ?, username = ?, email = ?, password = ?, role = ?, updated_at = ? WHERE id = ?"
	_, err := tx.ExecContext(ctx, SQL, user.FirstName, user.LastName, user.UserName, user.Email, user.Password, user.Role, user.UpdatedAt, user.Id)
	helper.PanicIfError(err)

	return user
}

func (u *UserRepositoryImpl) Delete(ctx context.Context, tx *sql.Tx, user domain.User) {
	//TODO implement me
	SQL := "DELETE FROM users WHERE id = ?"
	if user.Id == 0 {
		panic("user id is empty")
	}
	_, err := tx.ExecContext(ctx, SQL, user.Id)
	helper.PanicIfError(err)
}

func (u *UserRepositoryImpl) FindById(ctx context.Context, tx *sql.Tx, userId int) (domain.User, error) {
	//TODO implement me
	SQL := "SELECT id, firstname, lastname, username, email, password, role, created_at, updated_at FROM users WHERE id = ?"
	rows, err := tx.QueryContext(ctx, SQL, userId)
	helper.PanicIfError(err)
	defer rows.Close()

	user := domain.User{}
	if rows.Next() {
		err := rows.Scan(
			&user.Id,
			&user.FirstName,
			&user.LastName,
			&user.UserName,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.CreatedAt,
			&user.UpdatedAt,
		)
		helper.PanicIfError(err)
		return user, nil
	} else {
		return user, errors.New("user not found")
	}
}

func (u *UserRepositoryImpl) FindByUsername(ctx context.Context, tx *sql.Tx, username string) (domain.User, error) {
	//TODO implement me
	SQL := "SELECT id, firstname, lastname, username, email, password, role, created_at, updated_at FROM users WHERE username = ?"
	rows, err := tx.QueryContext(ctx, SQL, username)
	helper.PanicIfError(err)
	defer rows.Close()

	user := domain.User{}
	if rows.Next() {
		err := rows.Scan(
			&user.Id,
			&user.FirstName,
			&user.LastName,
			&user.UserName,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.CreatedAt,
			&user.UpdatedAt,
		)
		helper.PanicIfError(err)
		return user, nil
	} else {
		return user, errors.New("user not found")
	}
}

func (u *UserRepositoryImpl) FindByEmail(ctx context.Context, tx *sql.Tx, email string) (domain.User, error) {
	//TODO implement me
	SQL := "SELECT id, firstname, lastname, username, email, password, role, created_at, updated_at FROM users WHERE email = ?"
	rows, err := tx.QueryContext(ctx, SQL, email)
	helper.PanicIfError(err)
	defer rows.Close()

	user := domain.User{}
	if rows.Next() {
		err := rows.Scan(
			&user.Id,
			&user.FirstName,
			&user.LastName,
			&user.UserName,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.CreatedAt,
			&user.UpdatedAt,
		)
		helper.PanicIfError(err)
		return user, nil
	} else {
		return user, errors.New("user not found")
	}
}

func (u *UserRepositoryImpl) FindByRole(ctx context.Context, tx *sql.Tx, role string) ([]domain.User, error) {
	//TODO implement me
	SQL := "SELECT id, firstname, lastname, username, email, password, role, created_at, updated_at FROM users WHERE role = ?"
	rows, err := tx.QueryContext(ctx, SQL, role)
	helper.PanicIfError(err)
	defer rows.Close()

	var users []domain.User
	for rows.Next() {
		var user domain.User
		err := rows.Scan(&user.Id, &user.FirstName, &user.LastName, &user.UserName, &user.Email, &user.Password, &user.Role, &user.CreatedAt, &user.UpdatedAt)
		helper.PanicIfError(err)
		users = append(users, user)
	}
	return users, nil
}

func (u *UserRepositoryImpl) FindAll(ctx context.Context, tx *sql.Tx) []domain.User {
	//TODO implement me
	SQL := "SELECT id, firstname, lastname, username, email, password, role, created_at, updated_at FROM users"
	rows, err := tx.QueryContext(ctx, SQL)
	helper.PanicIfError(err)
	defer rows.Close()

	var users []domain.User
	for rows.Next() {
		user := domain.User{}
		err := rows.Scan(&user.Id, &user.FirstName, &user.LastName, &user.UserName, &user.Email, &user.Password, &user.Role, &user.CreatedAt, &user.UpdatedAt)
		helper.PanicIfError(err)
		users = append(users, user)
	}
	return users
}
