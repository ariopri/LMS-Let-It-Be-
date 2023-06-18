package domain

import "time"

type Video struct {
	VideoId     string    `json:"video_id"`
	VideoName   string    `json:"video_name"`
	Thumbnail   string    `json:"thumbnail"`
	Description string    `json:"description"`
	SubtopicId  int       `json:"subtopic_id"`
	CreteadAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}
