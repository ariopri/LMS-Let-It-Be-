package domain

import "time"

type Classes struct {
	Id          int       `json:"id"`
	ClassName   string    `json:"class_name"`
	SubjectId   int       `json:"subject_id"`
	Description string    `json:"description"`
	CreatedAt   time.Time `json:"created_at"`
}
