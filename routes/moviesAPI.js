var express = require("express");
var router = express.Router();
const { Movie } = require("../models/movie");

/*const movies = [
  {
    _id: { $oid: "5e0ce55cee83257a397355a6" },
    title: "Frozen II",
    actors: "Kristen Bell, Idina Menzel, Josh Gad",
    description:
      "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
    img_url: "https://i.imgur.com/SN4YgF2.jpg",
    runtime: "103 min",
    genres: "animation, adventure, comedy",
    screening_room: "Room 1",
    showtime_today: "10:00, 13:15, 18:30",
    showtime_tomorrow: "9:30, 14:00, 19:10"
  },
  {
    _id: { $oid: "5e0ceaf5ee83257a397355a7" },
    title: "Cats",
    actors: "Francesca Hayward, Taylor Swift, Laurie Davidson",
    description:
      "A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.",
    img_url:
      "https://m.media-amazon.com/images/M/MV5BM2QyZWRhYWQtNTBkNC00ZGE0LThiODUtNWQ5OWY3ZGQ3ODcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    runtime: "110 min",
    genres: "comedy, drama, musical",
    screening_room: "Room 2",
    showtime_today: "11:00, 15:15, 20:30",
    showtime_tomorrow: "10:30, 15:00, 21:10"
  },
  {
    _id: { $oid: "5e0ceb06ee83257a397355a8" },
    title: "Last Christmas",
    actors: "Emilia Clarke, Emma Thompson, Henry Golding",
    description:
      "Kate is a young woman subscribed to bad decisions. Working as an elf in a year round Christmas store is not good for the wannabe singer. However, she meets Tom there. Her life takes a new turn. For Kate, it seems too good to be true.",
    img_url:
      "https://m.media-amazon.com/images/M/MV5BNTQ4ZmY0NjgtYzVhNy00NzhiLTk3YTYtNzM1MTdjM2VhZDA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    runtime: "103 min",
    genres: "drama, romance, comedy",
    screening_room: "Room 3",
    showtime_today: "12:00, 16:15, 19:20",
    showtime_tomorrow: "13:30, 16:00, 20:40"
  },
  {
    _id: { $oid: "5e0cec67ee83257a397355a9" },
    title: "Knives Out",
    actors: "Daniel Craig, Chris Evans, Ana de Armas",
    description:
      "Wealthy crime novelist Harlan Thrombey invites his family to his mansion for his 85th birthday party. The next morning, Harlan's housekeeper Fran finds him dead, apparently having slit his own throat. An anonymous party pays private detective Benoit Blanc to investigate.",
    img_url:
      "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SY1000_SX675_AL_.jpg",
    runtime: "130 min",
    genres: "crime, comedy, drama",
    screening_room: "Room 4",
    showtime_today: "10:45, 14:15, 19:50",
    showtime_tomorrow: "9:30, 15:00, 19:20"
  },
  {
    _id: { $oid: "5e0ced6fee83257a397355aa" },
    title: "Star Wars: Episode IX - The Rise of Skywalker",
    actors: " Carrie Fisher, Mark Hamill, Adam Driver",
    description:
      "After Palpatine mysteriously returns, the Resistance faces the First Order once more in the final chapter of the Skywalker saga.",
    img_url:
      "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    runtime: "142 min",
    genres: "action, adventure, fantasy",
    screening_room: "Room 5",
    showtime_today: "10:10, 14:35, 19:20",
    showtime_tomorrow: "10:30, 14:00, 19:10"
  },
  {
    _id: { $oid: "5e0cee27ee83257a397355ab" },
    title: "Jumanji: The Next Level",
    actors: "Dwayne Johnson, Karen Gillian, Jack Black",
    description:
      "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
    img_url:
      "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    runtime: "123 min",
    genres: "action, adventure, comedy",
    screening_room: "Room 6",
    showtime_today: "13:00, 16:15, 21:20",
    showtime_tomorrow: "11:30, 15:00, 19:50"
  },
  {
    _id: { $oid: "5e0ceecbee83257a397355ac" },
    title: "Little Women",
    actors: "Emma Watson, Saoirse Ronan, Florence Pugh",
    description:
      "Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women each determined to live life on their own terms.",
    img_url:
      "https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    runtime: "135 min",
    genres: "drama, romance",
    screening_room: "Room 7",
    showtime_today: "12:00, 17:15, 21:30",
    showtime_tomorrow: "9:50, 13:00, 18:10"
  },
  {
    _id: { $oid: "5e0cef3eee83257a397355ad" },
    title: "Uncut Gems",
    actors: "Adam Sandler, Julia Fox, Kevin Garnett",
    description:
      "A charismatic New York City jeweler always on the lookout for the next big score, makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides, in his relentless pursuit of the ultimate win.",
    img_url:
      "https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
    runtime: "135 min",
    genres: "mystery, crime, drama",
    screening_room: "Room 8",
    showtime_today: "10:00, 13:15, 18:30",
    showtime_tomorrow: "9:30, 14:00, 19:10"
  }
]; */

router.get("/", async (req, res) => {
  const movies = await Movie.find().sort("name");
  res.send(movies);
});
router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");
  res.send(movie);
});

module.exports = router;
