package response

type LoginResponse struct {
	TokenType string `json:"token_type"`
	Token     string `json:"token"`
}
