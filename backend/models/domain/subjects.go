package domain

import "time"

type Subject struct {
	Id          int       `json:"id"`
	SubjectName string    `json:"subject_name"`
	CreatedAt   time.Time `json:"created_at"`
}
