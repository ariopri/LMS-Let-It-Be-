package request

type LoginCreateRequest struct {
	Username string `json:"username" validate:"required,min=1,max=20,lowercase"`
	Password string `json:"password" validate:"required,min=5,max=20"`
}
