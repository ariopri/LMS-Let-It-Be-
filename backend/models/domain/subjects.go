package domain

import "time"

type Subject struct {
	Id          int       `json:"id"`
	SubjectName string    `json:"subject_name"`
	Avatar      string    `json:"avatar"`
	CreatedAt   time.Time `json:"created_at"`
}
