package routes

import (
	"net/http"
	"portfolio/controlers"
)

func epreuveRouter() {
	http.HandleFunc("/epreuve", controlers.EpreuveControler)
}
