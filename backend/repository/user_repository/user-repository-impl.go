package user_repository

import (
	"context"
	"database/sql"
	"errors"
	"github.com/ariopri/MassiveProject/helper"
	"github.com/ariopri/MassiveProject/models/domain"
	"github.com/ariopri/MassiveProject/utils"
	"os"
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
	SQL := "INSERT INTO users (firstname, lastname, username, email, password) VALUES (?, ?, ?, ?, ?)"
	result, err := tx.ExecContext(
		ctx,
		SQL,
		user.FirstName,
		user.LastName,
		user.Username,
		user.Email,
		user.Password,
	)
	helper.PanicIfError(err)

	id, err := result.LastInsertId()
	helper.PanicIfError(err)
	user.Id = int(id)

	return user

}

func (u *UserRepositoryImpl) Update(ctx context.Context, tx *sql.Tx, user domain.User) domain.User {
	//TODO implement me
	userOld, _ := u.FindByID(ctx, tx, user.Id)

	SQL := "UPDATE users SET firstname = ?, lastname = ?, username = ?, email = ?, password = ? WHERE id = ?"

	if user.Password != userOld.Password {
		user.Password, _ = utils.HashPassword(user.Password)
	}

	if user.Avatar != userOld.Avatar {
		err := os.Remove(userOld.Avatar)
		helper.PanicIfError(err)
	}

	_, err := tx.ExecContext(
		ctx,
		SQL,
		user.FirstName,
		user.LastName,
		user.Username,
		user.Email,
		user.Password,
		user.Id,
	)
	helper.PanicIfError(err)
	return user
}

func (u *UserRepositoryImpl) Delete(ctx context.Context, tx *sql.Tx, user domain.User) {
	//TODO implement me
	SQL := "DELETE FROM users WHERE id = ?"
	_, err := tx.ExecContext(ctx, SQL, user.Id)
	helper.PanicIfError(err)
}

func (u *UserRepositoryImpl) FindByID(ctx context.Context, tx *sql.Tx, userID int) (domain.User, error) {
	SQL := "SELECT id, firstname,lastname, username, email,  password, role, avatar, created_at, updated_at FROM users WHERE id = ?"
	var user domain.User

	var rows *sql.Rows
	var err error
	if tx != nil {
		rows, err = tx.QueryContext(ctx, SQL, userID)
	} else {
		rows, err = u.db.QueryContext(ctx, SQL, userID)
	}
	if err != nil {
		return user, err
	}
	defer rows.Close()

	if rows.Next() {
		err = rows.Scan(
			&user.Id,
			&user.FirstName,
			&user.LastName,
			&user.Username,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.Avatar,
			&user.CreatedAt,
			&user.UpdatedAt,
		)
		if err != nil {
			return user, err
		}
		return user, nil
	}

	return user, errors.New("user not found")
}

//func (u *UserRepositoryImpl) FindByID(ctx context.Context, tx *sql.Tx, userId int) (domain.User, error) {
//	//TODO implement me
//	SQL := "SELECT id, username, password, created_at, updated_at FROM users WHERE id = ?"
//	rows, err := tx.QueryContext(ctx, SQL, userId)
//	helper.PanicIfError(err)
//	defer rows.Close()
//
//	user := domain.User{}
//	if rows.Next() {
//		err := rows.Scan(&user.Id, &user.Username, &user.Password, &user.CreatedAt, &user.UpdatedAt)
//		helper.PanicIfError(err)
//		return user, nil
//	} else {
//		return user, errors.New("user not found")
//	}
//}

func (u *UserRepositoryImpl) FindByUsername(ctx context.Context, tx *sql.Tx, username string) (domain.User, error) {
	//TODO implement me
	SQL := "SELECT id, firstname, lastname, username, email, password, role, avatar, created_at, updated_at FROM users WHERE username = ?"
	rows, err := tx.QueryContext(ctx, SQL, username)
	helper.PanicIfError(err)
	defer rows.Close()

	user := domain.User{}
	if rows.Next() {
		err := rows.Scan(
			&user.Id,
			&user.FirstName,
			&user.LastName,
			&user.Username,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.Avatar,
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
	SQL := "SELECT id, firstname, lastname, username, email, password, role, avatar, created_at, updated_at FROM users WHERE email = ?"
	rows, err := tx.QueryContext(ctx, SQL, email)
	helper.PanicIfError(err)
	defer rows.Close()

	user := domain.User{}
	if rows.Next() {
		err := rows.Scan(
			&user.Id,
			&user.FirstName,
			&user.LastName,
			&user.Username,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.Avatar,
			&user.CreatedAt,
			&user.UpdatedAt,
		)
		helper.PanicIfError(err)
		return user, nil
	} else {
		return user, errors.New("user not found")
	}
}

func (u *UserRepositoryImpl) FindAll(ctx context.Context, tx *sql.Tx) []domain.User {
	//TODO implement me
	SQL := "SELECT id, firstname, lastname, username, email, password, role, avatar, created_at, updated_at FROM users"
	rows, err := u.db.QueryContext(ctx, SQL) // Menggunakan u.db.QueryContext
	helper.PanicIfError(err)
	defer rows.Close()

	var users []domain.User
	for rows.Next() {
		user := domain.User{}
		err := rows.Scan(
			&user.Id,
			&user.FirstName,
			&user.LastName,
			&user.Username,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.Avatar,
			&user.CreatedAt,
			&user.UpdatedAt,
		)
		helper.PanicIfError(err)
		users = append(users, user)
	}
	return users
}

func (u *UserRepositoryImpl) Forgot(ctx context.Context, tx *sql.Tx, email string) (domain.User, error) {
	//TODO implement me
	SQL := "SELECT id, firstname, lastname, username, email, password, role, avatar, created_at, updated_at FROM users WHERE email = ?"
	rows, err := tx.QueryContext(ctx, SQL, email)
	helper.PanicIfError(err)
	defer rows.Close()

	user := domain.User{}
	if rows.Next() {
		err := rows.Scan(
			&user.Id,
			&user.FirstName,
			&user.LastName,
			&user.Username,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.Avatar,
			&user.CreatedAt,
			&user.UpdatedAt,
		)
		helper.PanicIfError(err)
		return user, nil
	} else {
		return user, errors.New("user not found")
	}
}

func (u *UserRepositoryImpl) IsUniqueFieldExist(ctx context.Context, tx *sql.Tx, field string, value string) (bool, error) {
	// Query untuk memeriksa keberadaan nilai pada field tertentu
	SQL := "SELECT id FROM users WHERE " + field + " = ?"
	rows, err := tx.QueryContext(ctx, SQL, value)
	helper.PanicIfError(err)
	defer rows.Close()

	// Periksa apakah ada baris yang dikembalikan
	if rows.Next() {
		// Nilai sudah ada, bukan unik
		return false, nil
	} else {
		// Nilai belum ada, unik
		return true, nil
	}
}
