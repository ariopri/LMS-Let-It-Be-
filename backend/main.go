package main

import (
	"github.com/ariopri/MassiveProject/helper"
	"github.com/gin-gonic/gin"
)

func main() {
	app := gin.Default()

	route := app

	route.GET("", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "Hello World",
		})
		return
	})

	err := app.Run(":8000")
	helper.PanicIfError(err)
}
