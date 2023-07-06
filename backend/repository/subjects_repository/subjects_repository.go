package subjects_repository

import (
	"context"
	"database/sql"
	"github.com/ariopri/MassiveProject/models/domain"
)

type SubjectRepository interface {
	Save(ctx context.Context, tx *sql.Tx, subject domain.Subject) domain.Subject
	Update(ctx context.Context, tx *sql.Tx, subject domain.Subject) domain.Subject
	Delete(ctx context.Context, tx *sql.Tx, subject domain.Subject)
	FindByID(ctx context.Context, tx *sql.Tx, subjectId int) (domain.Subject, error)
	FindBySubjectName(ctx context.Context, tx *sql.Tx, subjectName string) (domain.Subject, error)
	FindAll(ctx context.Context, tx *sql.Tx) []domain.Subject
}
