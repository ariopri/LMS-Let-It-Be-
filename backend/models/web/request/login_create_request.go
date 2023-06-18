package request

type LoginCreateRequest struct {
	username string `json:"username" validate:"required,min=1,max=20,lowercase"`
	password string `json:"password" validate:"required,min=5,max=20"`
}
