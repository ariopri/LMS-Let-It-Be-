package request

type UserCreateRequest struct {
	FirstName string `json:"firstname" validate:"required,min=1,max=20"`
	LastName  string `json:"lastname" validate:"required,min=1,max=20"`
	UserName  string `json:"username" validate:"required,min=1,max=20,lowercase"`
	Email     string `json:"email" validate:"required,email"`
	Password  string `json:"password" validate:"required,min=5,max=20"`
}
