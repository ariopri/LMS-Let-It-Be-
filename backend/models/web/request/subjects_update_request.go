package request

type SubjectUpdateRequest struct {
	SubjectName string `json:"subject_name" validate:"required,min=2,max=20"`
}
