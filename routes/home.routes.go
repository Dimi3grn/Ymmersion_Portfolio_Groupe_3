package routes

import (
	"net/http"
	"portfolio/controlers"
)

func homeRouter() {
	http.HandleFunc("/", controlers.HomeControler)
}
