package request

import "time"

type UserCreateRequest struct {
	Firstname string    `json:"firstname" validate:"required,min=1,max=20"`
	Lastname  string    `json:"lastname" validate:"required,min=1,max=20"`
	Email     string    `json:"email" validate:"required,email"`
	Username  string    `json:"username" validate:"required,min=1,max=20,lowercase"`
	Password  string    `json:"password" validate:"required,min=5,max=20"`
	CreatedAt time.Time `json:"created_at"`
}
