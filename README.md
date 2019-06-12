# Django + AngularJS Todo Application

This project was created as a homework at Plovdiv University.

It's Todo List Application implemented with Django and Angular.

## Install locally

### Start server

1. Create python virtual environment
2. Install dependencies

`pip install -r requirements/requirements.txt`

3. Run migrations (creates sqlite file in root)

`python manage.py migrate`

4. Run server

`python manage.py runserver`

This should start server at http://127.0.0.1:8000/.

### Start client

1. Go to web directory

`cd todoweb/`

2. Install dependecies

`npm install`

3. Serve Angular app

`ng server`

And open in your browser http://localhost:4200/.
