package controller

import (
	"github.com/ariopri/MassiveProject/helper"
	"github.com/ariopri/MassiveProject/models/web/request"
	"github.com/ariopri/MassiveProject/models/web/response"
	"github.com/ariopri/MassiveProject/service/auth_service"
	"github.com/gin-gonic/gin"
	"net/http"
)

type AuthenticationController struct {
	authenticationService auth_service.AuthenticationService
}

func NewAuthenticationController(authenticationService auth_service.AuthenticationService) *AuthenticationController {
	return &AuthenticationController{authenticationService: authenticationService}
}

func (controller *AuthenticationController) Login(ctx *gin.Context) {
	loginRequest := request.LoginCreateRequest{}
	err := ctx.ShouldBindJSON(&loginRequest)
	helper.PanicIfError(err)

	token, err_token := controller.authenticationService.Login(ctx, loginRequest)
	if err_token != nil {
		webResponse := response.WebResponse{
			Code:    http.StatusBadRequest,
			Status:  "BAD REQUEST",
			Message: "invalid username or password",
		}
		ctx.JSON(http.StatusBadRequest, webResponse)
		return
	}
	resp := helper.ToLoginResponse(token)

	webResponse := response.WebResponse{
		Code:    http.StatusOK,
		Status:  "OK",
		Message: "login success",
		Data:    resp,
	}
	ctx.JSON(http.StatusOK, webResponse)
}

func (controller *AuthenticationController) Register(ctx *gin.Context) {
	createRequest := request.UserCreateRequest{}
	err := ctx.ShouldBindJSON(&createRequest)
	helper.PanicIfError(err)

	controller.authenticationService.Register(ctx, createRequest)

	webResponse := response.WebResponse{
		Code:    http.StatusOK,
		Status:  "OK",
		Message: "register success",
		Data:    "",
	}
	ctx.JSON(http.StatusOK, webResponse)
}
