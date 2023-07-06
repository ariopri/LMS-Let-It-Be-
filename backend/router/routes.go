package router

import (
	"github.com/ariopri/MassiveProject/controller"
	"github.com/ariopri/MassiveProject/middlewares"
	"github.com/ariopri/MassiveProject/repository/user_repository"
	"github.com/gin-gonic/gin"
)

func NewRouter(userRepository user_repository.UserRepository, authenticationController *controller.AuthenticationController, userController *controller.UserController, subjectsController *controller.SubjectsController) *gin.Engine {
	service := gin.Default()

	service.GET("", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "",
		})
	})

	router := service.Group("/api")

	//authentification
	authenticationRouter := router.Group("/auth")
	authenticationRouter.POST("/login", authenticationController.Login)
	authenticationRouter.POST("/register", authenticationController.Register)

	//subjects
	router.GET("/subjects", subjectsController.FindAll)
	router.GET("/subjects/:id", subjectsController.FindById)
	router.POST("/subjects", subjectsController.Create)
	router.PUT("/subjects/:id", subjectsController.Update)
	router.DELETE("/subjects/:id", subjectsController.Delete)

	//user
	userRouter := router.Group("/user")
	userRouter.GET("", middlewares.DeserializeUser(userRepository), userController.GetAllUser)
	userRouter.GET("/:id", middlewares.DeserializeUser(userRepository), userController.GetUserById)

	return service

}
