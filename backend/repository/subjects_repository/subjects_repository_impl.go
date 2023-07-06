package subjects_repository

import (
	"context"
	"database/sql"
	"errors"
	"github.com/ariopri/MassiveProject/helper"
	"github.com/ariopri/MassiveProject/models/domain"
)

type SubjectRepositoryImpl struct {
	db *sql.DB
}

func NewSubjectRepository(db *sql.DB) SubjectRepository {
	return &SubjectRepositoryImpl{db: db}
}

func (s *SubjectRepositoryImpl) Save(ctx context.Context, tx *sql.Tx, subject domain.Subject) domain.Subject {
	//TODO implement me
	SQL := "INSERT INTO subjects (subject_name) VALUES (?)"
	result, err := tx.ExecContext(ctx, SQL, subject.SubjectName)
	helper.PanicIfError(err)

	id, err := result.LastInsertId()
	helper.PanicIfError(err)
	subject.Id = int(id)

	return subject
}

func (s *SubjectRepositoryImpl) Update(ctx context.Context, tx *sql.Tx, subject domain.Subject) domain.Subject {
	//TODO implement me
	SQL := "UPDATE subjects SET subject_name = ? WHERE id = ?"
	_, err := tx.ExecContext(ctx, SQL, subject.SubjectName, subject.Id)
	helper.PanicIfError(err)

	return subject
}

func (s *SubjectRepositoryImpl) Delete(ctx context.Context, tx *sql.Tx, subject domain.Subject) {
	//TODO implement me
	SQL := "DELETE FROM subjects WHERE id = ?"
	_, err := tx.ExecContext(ctx, SQL, subject.Id)
	helper.PanicIfError(err)
}

func (s *SubjectRepositoryImpl) FindByID(ctx context.Context, tx *sql.Tx, subjectId int) (domain.Subject, error) {
	//TODO implement me
	SQL := "SELECT id, subject_name FROM subjects WHERE id = ?"
	rows, err := tx.QueryContext(ctx, SQL, subjectId)
	helper.PanicIfError(err)
	defer rows.Close()

	subjects := domain.Subject{}
	if rows.Next() {
		err := rows.Scan(&subjects.Id, &subjects.SubjectName)
		helper.PanicIfError(err)

		return subjects, nil
	} else {
		return subjects, errors.New("ID" + string(subjectId) + "not found")
	}
}

func (s *SubjectRepositoryImpl) FindBySubjectName(ctx context.Context, tx *sql.Tx, subjectName string) (domain.Subject, error) {
	//TODO implement me
	SQL := "SELECT id, subject_name FROM subjects WHERE subject_name = ?"
	rows, err := tx.QueryContext(ctx, SQL, subjectName)
	helper.PanicIfError(err)
	defer rows.Close()

	subjects := domain.Subject{}
	if rows.Next() {
		err := rows.Scan(&subjects.Id, &subjects.SubjectName)
		helper.PanicIfError(err)

		return subjects, nil
	} else {
		return subjects, errors.New("Subject Name" + string(subjectName) + "not found")
	}
}

func (s *SubjectRepositoryImpl) FindAll(ctx context.Context, tx *sql.Tx) []domain.Subject {
	//TODO implement me
	SQL := "SELECT id, subject_name FROM subjects"
	rows, err := tx.QueryContext(ctx, SQL)
	helper.PanicIfError(err)
	defer rows.Close()

	var subjects []domain.Subject
	for rows.Next() {
		subject := domain.Subject{}
		err := rows.Scan(&subject.Id, &subject.SubjectName)
		helper.PanicIfError(err)

		subjects = append(subjects, subject)
	}
	return subjects
}
