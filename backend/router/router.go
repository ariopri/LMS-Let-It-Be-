package router

import (
	"github.com/ariopri/MassiveProject/controller"
	"github.com/ariopri/MassiveProject/middlewares"
	"github.com/ariopri/MassiveProject/repository/user_repository"
	"github.com/gin-gonic/gin"
)

func NewRouter(userRepository user_repository.UserRepository, authenticationController *controller.AuthenticationController, userController *controller.UserController) *gin.Engine {
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

	userRouter := router.Group("/user")
	userRouter.GET("", middlewares.DeserializeUser(userRepository), userController.GetAllUser)
	userRouter.GET("/:id", middlewares.DeserializeUser(userRepository), userController.GetUserById)

	return service

}
