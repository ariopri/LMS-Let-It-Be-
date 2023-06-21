package middlewares

import (
	"fmt"
	"github.com/ariopri/MassiveProject/config"
	"github.com/ariopri/MassiveProject/helper"
	"github.com/ariopri/MassiveProject/repository/user_repository"
	"github.com/ariopri/MassiveProject/utils"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
	"strings"
)

func DeserializeUser(userRepository user_repository.UserRepository) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		//TODO implement me
		var token, role string
		authorizationHeader := ctx.Request.Header.Get("Authorization")
		filds := strings.Fields(authorizationHeader)
		if len(filds) != 0 && filds[0] == "Bearer" {
			token = filds[1]
		}
		if token == "" {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
			return
		}
		config, _ := config.LoadConfig(".")
		sub, err := utils.ValidateToken(token, config.TokenSecret)
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
		}
		id, err_id := strconv.Atoi(fmt.Sprint(sub))
		helper.PanicIfError(err_id)
		result, err := userRepository.FindByID(ctx, nil, id)
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
			return
		}
		role = result.Role
		ctx.Set("currentUser", result.Username)
		ctx.Set("role", role)
		ctx.Next()
	}
}
