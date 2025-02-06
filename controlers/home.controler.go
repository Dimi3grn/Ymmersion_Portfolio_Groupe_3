package controlers

import (
	"net/http"
	"portfolio/templates"
)

func HomeControler(w http.ResponseWriter, r *http.Request) {
	templates.ListTemp.ExecuteTemplate(w, "acceuil", nil)
}
