package domain

import "time"

type Subtopics struct {
	Id           int       `json:"id"`
	SubtopicName string    `json:"subtopic_name"`
	Description  string    `json:"description"`
	ClassId      int       `json:"class_id"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}
