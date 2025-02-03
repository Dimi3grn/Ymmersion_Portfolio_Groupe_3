package main

import (
	"net/http"
	"log"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir(".")))
	log.Println("Serveur démarré sur http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}