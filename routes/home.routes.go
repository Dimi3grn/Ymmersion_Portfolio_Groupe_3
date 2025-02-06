package routes

import (
	"net/http"
	"portfolio/controlers"
)

// Créer une route home qui va serveur de page d'acceuil, le "/" et utiliser uniquement pour la page d'acceuil sinon changer par le nom du template.
func homeRouter() {
	http.HandleFunc("/", controlers.HomeControler)
}
