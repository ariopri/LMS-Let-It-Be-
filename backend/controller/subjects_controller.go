package controller

import (
	"github.com/ariopri/MassiveProject/helper"
	"github.com/ariopri/MassiveProject/models/web/request"
	"github.com/ariopri/MassiveProject/models/web/response"
	"github.com/ariopri/MassiveProject/service/subjects_service"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

type SubjectsController struct {
	SubjectsService subjects_service.SubjectsService
}

func NewSubjectsController(subjectsService subjects_service.SubjectsService) *SubjectsController {
	return &SubjectsController{SubjectsService: subjectsService}
}

func (controller *SubjectsController) Create(ctx *gin.Context) {
	//TODO implement me
	subjectCreateRequest := request.SubjectCreateRequest{}
	err := ctx.ShouldBindJSON(&subjectCreateRequest)
	if err != nil {
		ctx.JSON(400, gin.H{"message": "bad request"})
		return
	}
	subjectsResponse := controller.SubjectsService.Create(ctx, subjectCreateRequest)
	webResponse := response.WebResponse{
		Code:    http.StatusOK,
		Status:  "OK",
		Message: "success create subject",
		Data:    subjectsResponse,
	}
	ctx.JSON(http.StatusOK, webResponse)
	return
}

func (controller *SubjectsController) Update(ctx *gin.Context) {
	//TODO implement me
	subjectUpdateRequest := request.SubjectUpdateRequest{}
	err := ctx.ShouldBindJSON(&subjectUpdateRequest)
	if err != nil {
		ctx.JSON(400, gin.H{"message": "bad request"})
		return
	}
	subjectsId := ctx.Param("id")
	id, err := strconv.Atoi(subjectsId)
	helper.PanicIfError(err)

	subjects := controller.SubjectsService.FindById(ctx, id)
	if subjects.Id == 0 {
		ctx.JSON(400, gin.H{"message": "bad request"})
		return
	}
	helper.PanicIfError(err)

	subjectsResponse := controller.SubjectsService.Update(ctx, subjectUpdateRequest)
	webResponse := response.WebResponse{
		Code:   http.StatusOK,
		Status: "OK",
		Data:   subjectsResponse,
	}
	ctx.JSON(http.StatusOK, webResponse)
	return
}

func (controller *SubjectsController) Delete(ctx *gin.Context) {
	subjectsId := ctx.Param("id")
	id, err := strconv.Atoi(subjectsId)
	helper.PanicIfError(err)

	controller.SubjectsService.Delete(ctx, id)
	webResponse := response.WebResponse{
		Code:    http.StatusOK,
		Status:  "OK",
		Message: "success delete subject",
	}
	ctx.JSON(http.StatusOK, webResponse)

}

func (controller *SubjectsController) FindById(ctx *gin.Context) {
	//TODO implement me
	subjectsId := ctx.Param("id")
	id, err := strconv.Atoi(subjectsId)
	helper.PanicIfError(err)

	subjects := controller.SubjectsService.FindById(ctx, id)
	if subjects.Id == 0 {
		ctx.JSON(400, gin.H{"message": "bad request"})
		return
	}
	webResponse := response.WebResponse{
		Code:    http.StatusOK,
		Status:  "OK",
		Message: "success get subject by id",
		Data:    subjects,
	}
	ctx.JSON(http.StatusOK, webResponse)
	return
}

func (controller *SubjectsController) FindByUsername(ctx *gin.Context) {
	//TODO implement me
	subjectsUsername := ctx.Param("username")
	subjects := controller.SubjectsService.FindByUsername(ctx, subjectsUsername)
	if subjects.Id == 0 {
		ctx.JSON(400, gin.H{"message": "bad request"})
		return
	}
	webResponse := response.WebResponse{
		Code:    http.StatusOK,
		Status:  "OK",
		Message: "success get subject by username",
		Data:    subjects,
	}
	ctx.JSON(http.StatusOK, webResponse)
	return
}

func (controller *SubjectsController) FindAll(ctx *gin.Context) {
	//TODO implement me
	subjects := controller.SubjectsService.FindAll(ctx)
	webResponse := response.WebResponse{
		Code:    http.StatusOK,
		Status:  "OK",
		Message: "success get all subject",
		Data:    subjects,
	}
	ctx.JSON(http.StatusOK, webResponse)
	return
}
