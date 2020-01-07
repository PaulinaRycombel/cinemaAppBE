# cinemaAppBE

to install:
 npm init
 
to add some sample data:
 mongoimport --db moviedb --collection  screenings --file data/screening.json --jsonArray
 mongoimport --db moviedb --collection  movies --file data/movies.json --jsonArray
 mongoimport --db moviedb --collection  auditoriums --file data/auditoriums.json --jsonArray
 
to start app:

node index.js

