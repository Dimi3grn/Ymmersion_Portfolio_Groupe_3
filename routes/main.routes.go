package routes

import (
	"fmt"
	"net/http"
	"os"
)

func Init() {
	homeRouter()
	epreuveRouter()
	// Ajouter route fichier statique
	fs := http.FileServer(http.Dir("./assets"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	fmt.Println("Serveur démarré sur http://localhost:8080")
	errServe := http.ListenAndServe(":8080", nil)
	if errServe != nil {
		fmt.Printf("Erreur Serveur - %s", errServe.Error())
		os.Exit(02)
	}
}
