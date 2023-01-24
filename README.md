## Available Scripts

In the project directory, you can run:

### `npm install`

Install dependencies

### `npm run start or npm start`

Runs the app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in your browser.

## List api


http://localhost:9000/api/create-supplier   [POST]
http://localhost:9000/api/get-all-suppliers   [GET]
http://localhost:9000/api/get-supplier/:id   [GET]
http://localhost:9000/api/update-supplier/:id   [PUT]
http://localhost:9000/api/delete-supplier/:id   [DELETE]

http://localhost:9000/api/create-message

## Examples requests

{
	"email": "aksi@gmail.com",
	"location": "Kentochy USA.",
    "name": "aksi herramientas",
    "twistkey": "045",
    "suppliers": "Ferretería",
    "status": "active"
}

{
	"message": "Bienvenido candidato 01"
}