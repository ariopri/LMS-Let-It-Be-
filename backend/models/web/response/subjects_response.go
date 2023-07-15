package response

type SubjectsResponse struct {
	Id          int    `json:"id"`
	SubjectName string `json:"subject_name"`
	Avatar      string `json:"avatar"`
}
