package utils

import (
	"errors"
	"fmt"
	"github.com/golang-jwt/jwt"
	"time"
)

func GenerateToken(ttl time.Duration, payload interface{}, secretJWTKey string) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)

	now := time.Now().UTC()
	claim := token.Claims.(jwt.MapClaims)

	claim["sub"] = payload
	claim["exp"] = now.Add(ttl).Unix()
	claim["iat"] = now.Unix()
	claim["nbf"] = now.Unix()

	tokenString, err := token.SignedString([]byte(secretJWTKey))

	if err != nil {
		return "", errors.New("generating JWT Token failed")
	}
	return tokenString, nil
}

func ValidateToken(token string, signedJWTKey string) (interface{}, error) {
	tok, err := jwt.Parse(token, func(jwtToken *jwt.Token) (interface{}, error) {
		if _, ok := jwtToken.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", jwtToken.Header["alg"])
		}
		return []byte(signedJWTKey), nil
	})
	if err != nil {
		return nil, fmt.Errorf("error parsing token: %v", err)
	}
	claims, ok := tok.Claims.(jwt.MapClaims)
	if !ok || !tok.Valid {
		return nil, fmt.Errorf("token is invalid")
	}
	return claims["sub"], nil
}
