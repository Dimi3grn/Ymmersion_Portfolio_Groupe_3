package controlers

import (
	"fmt"
	"net/http"
	"portfolio/templates"
)

// créer une fonction controler qui permet de compléter la fonction route associé au meme template.
func EpreuveControler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Query().Has("id") == false {
		templates.ListTemp.ExecuteTemplate(w, "menu", nil)
		return
	}
	id := r.URL.Query().Get("id")
	templateName := "Epreuve" + id
	fmt.Println("templateName", templateName)
	templates.ListTemp.ExecuteTemplate(w, templateName, nil)
}
