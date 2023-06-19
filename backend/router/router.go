package router

import (
	"github.com/ariopri/MassiveProject/controller"
	"github.com/ariopri/MassiveProject/repository/user_repository"
	"github.com/gin-gonic/gin"
)

func NewRouter(repository user_repository.UserRepository, controller *controller.AuthenticationController) *gin.Engine {
	router := gin.Default()
	router.Group("/api")
	authenticationRouter := router.Group("/auth")
	authenticationRouter.POST("/login", controller.Login)
	authenticationRouter.POST("/register", controller.Register)

	return router
}
