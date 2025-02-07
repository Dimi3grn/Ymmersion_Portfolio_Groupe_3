package routes

import (
	"fmt"
	"net/http"
	"os"
	"portfolio/controlers"
)

// fonction qui permet de charger les routes.
func Init() {
	//Permet de réduperai tout les fichier static type css,img,js,music.
	fs := http.FileServer(http.Dir("./assets"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", controlers.HomeControler)
	http.HandleFunc("/epreuve", controlers.EpreuveControler)
	http.HandleFunc("/conclusion", controlers.ConclusionControler)
	http.HandleFunc("/score", controlers.ScoreControler)

	//Permet de créer le serveur et de le lancer sur le port 8080.
	fmt.Println("Serveur démarré sur http://localhost:8080")
	errServe := http.ListenAndServe(":8080", nil)
	//verifie si il n'y pas d'erreur
	if errServe != nil {
		fmt.Printf("Erreur Serveur - %s", errServe.Error())
		os.Exit(02)
	}
}
