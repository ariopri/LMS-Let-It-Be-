package router

import (
	"github.com/ariopri/MassiveProject/controller"
	"github.com/gin-gonic/gin"
)

func NewRouter(authenticationController *controller.AuthenticationController) *gin.Engine {
	service := gin.Default()

	service.GET("", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "",
		})
	})

	router := service.Group("/api")
	authenticationRouter := router.Group("/auth")
	authenticationRouter.POST("/login", authenticationController.Login)
	authenticationRouter.POST("/register", authenticationController.Register)

	return service

}
