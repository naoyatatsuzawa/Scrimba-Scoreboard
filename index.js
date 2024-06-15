let homeScore = 0
let guestScore = 0

function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById("home-score").innerText = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.getElementById("guest-score").innerText = guestScore;
    }
}

// function homeScoreOne() {
//     homeScore += 1
//     document.getElementById("home-score").innerText = homeScore
// }

// function homeScoreTwo() {
//     homeScore += 2
//     document.getElementById("home-score").innerText = homeScore
// }

// function homeScoreThree() {
//     homeScore += 3
//     document.getElementById("home-score").innerText = homeScore
// }

// function guestScoreOne() {
//     guestScore += 1
//     document.getElementById("guest-score").innerText = guestScore
// }

// function guestScoreTwo() {
//     guestScore += 2
//     document.getElementById("guest-score").innerText = guestScore
// }

// function guestScoreThree() {
//     guestScore += 3
//     document.getElementById("guest-score").innerText = guestScore
// }

