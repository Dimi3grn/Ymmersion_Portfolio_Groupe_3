package controlers

import (
	"net/http"
	"portfolio/templates"
)

func EpreuveControler(w http.ResponseWriter, r *http.Request) {
	templates.ListTemp.ExecuteTemplate(w, "epreuve", nil)
}
