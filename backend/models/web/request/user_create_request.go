package request

type UserCreateRequest struct {
	Firstname string `json:"firstname" validate:"required,min=1,max=20"`
	Lastname  string `json:"lastname" validate:"required,min=1,max=20"`
	email     string `json:"email" validate:"required,email"`
	Username  string `json:"username" validate:"required,min=1,max=20,lowercase"`
	Password  string `json:"password" validate:"required,min=5,max=20"`
}
