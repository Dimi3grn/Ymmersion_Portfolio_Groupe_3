package controlers

import (
	"net/http"
	"portfolio/templates"
)

// créer une fonction controler qui permet de compléter la fonction route associé au meme template.
func ScoreControler(w http.ResponseWriter, r *http.Request) {
	templates.ListTemp.ExecuteTemplate(w, "score", nil)
}
