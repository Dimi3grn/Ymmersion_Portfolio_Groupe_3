package main

import (
	"portfolio/routes"
	"portfolio/templates"
)

// fonction qui charge le code des dossier (ici tempaltes et routes)
func main() {
	templates.Init()
	routes.Init()
}
