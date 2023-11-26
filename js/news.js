"use strict"; // credit to Yahtzee Master#0168
let ticker = document.getElementById("newsContent");
let tickerContainer = document.getElementById("newsTicker"); // ticker is the text element, tickerContainer is... the thing that contains ticker

let newsPosition = -1e100; // hopefully noones screen is this big

function tickNews() {
  if (player) {
  if (!player.hideNews) {
  newsPosition -= 3;
  ticker.style.left = `${newsPosition}px`;

  if (newsPosition < -ticker.offsetWidth) newNewsMessage()};
  }
}

function newNewsMessage() {
  if (!player.hideNews) {
  const newsCandidates = [];
  for (const i in newsArray)
    if (newsArray[i][1] === undefined || newsArray[i][1]())
      newsCandidates.push(newsArray[i][0]);
  player.newsTotal = player.newsTotal.plus(1);
  ticker.innerHTML = newsCandidates[Math.floor(newsCandidates.length * Math.random())];
  newsPosition = tickerContainer.offsetWidth;
  ticker.style.left = `${newsPosition}px`};
}
// you can add a second element to each message's array
// the second element is a function that returns a boolean of whether to shown it
const newsArray = [
  ["I hear that if you change your devSpeed..."],
  ["There are dangerous beings out there"],
  ["What? You haven't heard of the Prestige Tree?"],
  ["Wait...is this Covid-33?"],
  ["What's the difference between this game, and another game......There isn't a difference, it's a game."],
  ["Oh..pfft, you haven't heard of muck before?"],
  ["I heard that someone is making the 1,000 layer Tree...Is that true?"],
  ["Crystals have the tendency to move"],
  ["Rabbits are supposed to be pretty friendly in the community."],
  ["Wait why does this news ticker have a blue border?"],
  ["But that's just a theory! A TMT Theory!"],
  ["Why did the chicken cross the road?"],
  ["Peace and Peace and Peace and Peace and Peace"],
  ["Did you hear about the guy who put tape on a leaking pipe...what a fool"],
  ["Lovebeast isn't real enough to cause harm to the world"],
  ["Time is running out"],
  ["You have dysentery!"],
  ["Vending machines can get you stuck somehow..."],
  ["There's two types of players; pacifists...and murderers..."],
  ["This is existing...because it just is..."],
  ["This is sponsered by Raid Shadow Legends"],
  ["He's cranking 90's!"],
  ["Why did you add news ticker text at 2 in the morning dude..."],
  ["Multiple Timelines, Endless Possiblities, and yet you choose to collapse them."],
  ["There's no such thing as stopping now"],
  ["Is it just me, or are Experiments more dangerous than humans..."],
];
setTimeout(() => {
  ticker = document.getElementById("newsContent");
  tickerContainer = document.getElementById("newsTicker");
  setInterval(tickNews, 25);
}, 250);