package request

import "time"

type UserCreateRequest struct {
	FirstName string    `json:"firstname" validate:"min=0,max=20"`
	LastName  string    `json:"lastname" validate:"min=0,max=20"`
	Username  string    `json:"username" validate:"required,min=1,max=20,lowercase"`
	Email     string    `json:"email"`
	Password  string    `json:"password" validate:"required,min=5,max=20"`
	CreatedAt time.Time `json:"created_at"`
}
