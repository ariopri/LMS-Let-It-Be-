package config

import (
	"database/sql"
	"fmt"
	"github.com/ariopri/MassiveProject/helper"
	"time"
)

func ConnectionDB(config Config) *sql.DB {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true", config.DBUser, config.DBPassword, config.DBHost, config.DBPort, config.DBName)
	db, err := sql.Open("mysql", dsn)
	helper.PanicIfError(err)

	fmt.Println("Success connect to database")

	db.SetMaxIdleConns(5)
	db.SetMaxOpenConns(20)
	db.SetConnMaxLifetime(60 * time.Minute)
	db.SetConnMaxIdleTime(10 * time.Minute)

	return db
}
