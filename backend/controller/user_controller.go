package controller

import (
	"github.com/ariopri/MassiveProject/models/web/response"
	"github.com/ariopri/MassiveProject/repository/user_repository"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

type UserController struct {
	userRepository user_repository.UserRepository
}

func NewUserController(userRepository user_repository.UserRepository) *UserController {
	return &UserController{userRepository: userRepository}
}

func (controller *UserController) GetAllUser(ctx *gin.Context) {
	//TODO implement me
	user := controller.userRepository.FindAll(ctx, nil)
	webResponse := response.WebResponse{
		Code:    http.StatusOK,
		Status:  "OK",
		Message: "success get all user",
		Data:    user,
	}
	ctx.JSON(http.StatusOK, webResponse)
}

func (controller *UserController) GetUserById(ctx *gin.Context) {
	//TODO implement me
	userId := ctx.Param("id")
	id, err := strconv.Atoi(userId)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "bad request"})
		return
	}
	user, err := controller.userRepository.FindByID(ctx, nil, id)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "bad request"})
		return
	}
	webResponse := response.WebResponse{
		Code:    http.StatusOK,
		Status:  "OK",
		Message: "success get user by id",
		Data:    user,
	}
	ctx.JSON(http.StatusOK, webResponse)
}
