package response

type RegisterResponse struct {
	Token string `json:"token"`
	Role  string `json:"role"`
}
