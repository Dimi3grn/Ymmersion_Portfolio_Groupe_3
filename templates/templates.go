package templates

import (
	"fmt"
	"html/template"
	"os"
)

var ListTemp *template.Template

func Init() {
	listTemp, errTemp := template.ParseGlob("./templates/*.html")
	if errTemp != nil {
		fmt.Printf("Erreur Teplates - %s", errTemp.Error())
		os.Exit(02)
	}
	ListTemp = listTemp
}
