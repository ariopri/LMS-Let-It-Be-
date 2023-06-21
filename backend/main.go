package main

import (
	"github.com/ariopri/MassiveProject/config"
	"github.com/ariopri/MassiveProject/controller"
	"github.com/ariopri/MassiveProject/helper"
	"github.com/ariopri/MassiveProject/repository/user_repository"
	"github.com/ariopri/MassiveProject/router"
	"github.com/ariopri/MassiveProject/service/auth_service"
	"github.com/go-playground/validator/v10"
	_ "github.com/go-sql-driver/mysql"
	"log"
)

func main() {

	loadConfig, err := config.LoadConfig(".")
	if err != nil {
		log.Fatal("Could not load config file", err)
	}
	db := config.ConnectionDB(&loadConfig)
	validate := validator.New()

	userRepository := user_repository.NewUserRepository(db)
	authenticationService := auth_service.NewAuthenticationService(userRepository, db, validate)
	authenticationController := controller.NewAuthenticationController(authenticationService)
	userController := controller.NewUserController(userRepository)

	routes := router.NewRouter(userRepository, authenticationController, userController)
	errService := routes.Run(":8080")
	helper.PanicIfError(errService)
}
