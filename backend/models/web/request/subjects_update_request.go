package request

type SubjectUpdateRequest struct {
	Id          int
	SubjectName string `json:"subject_name" validate:"required,min=2,max=20"`
	Avatar      string `json:"avatar"`
}
