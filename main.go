package main

import (
	"portfolio/routes"
	"portfolio/templates"
)

func main() {
	templates.Init()
	routes.Init()
}
