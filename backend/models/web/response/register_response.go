package response

type RegisterResponse struct {
	Message string `json:"message"`
	Token   string `json:"token"`
	Role    string `json:"role"`
}
