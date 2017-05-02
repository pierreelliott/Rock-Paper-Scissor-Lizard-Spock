window.addEventListener("load", function () {
	var rock = document.getElementById("rock"),
	paper = document.getElementById("paper"),
	scissors = document.getElementById("scissors"),
	lizard = document.getElementById("lizard"),
	spock = document.getElementById("spock");

	var player1 = {}, player2 = {};

	player1.hand = document.getElementById("choice1");
	player1.choice = "rock";
	player2.hand = document.getElementById("choice2");
	player2.choice = "rock";

	rock.addEventListener("click", function () { player1.choice = "rock"; play(); });
	paper.addEventListener("click", function () { player1.choice = "paper"; play(); });
	scissors.addEventListener("click", function () { player1.choice = "scissors"; play(); });
	lizard.addEventListener("click", function () { player1.choice = "lizard"; play(); });
	spock.addEventListener("click", function () { player1.choice = "spock"; play(); });

	player1.hand.addEventListener("animationend", function() {
		//console.log("Animation ended");

		player1.hand.textContent = "";
		var newhand = document.createElement("span");
		newhand.className = getHand(player1.choice);
		player1.hand.append(newhand);

		//console.log("P1 updated\nChoice : " + getHand(player1.choice));

		player2.hand.textContent = "";
		var newhand = document.createElement("span");
		newhand.className = getHand(player2.choice);
		player2.hand.append(newhand);

		//console.log("P2 updated");

		player1.hand.classList.toggle("shakeHands");
		player2.hand.classList.toggle("shakeHands");

		updateScore(player1.choice, player2.choice);
 	});

	function play() {
		//console.log("Game begins");
		document.getElementById("score").style.backgroundColor = "white";
		document.getElementById("score").textContent = "";
		computerTurn();
		player1.hand.classList.toggle("shakeHands");
		player2.hand.classList.toggle("shakeHands");
	}

	function computerTurn() {
		player2.choice = randomChoice();
	}
});

var body = document.getElementsByTagName("body")[0];

function updateScore(c1, c2) {
	var score = document.getElementById("score");

	//console.log("Update score");

	if(c1 == c2) {
		score.textContent = "It's a tie !";
		score.style.backgroundColor = "lightblue";
	} else {
		if( (c1=="rock"&&(c2=="scissors"||c2=="lizard")) ||
 			(c1=="paper"&&(c2=="rock"||c2=="spock")) ||
		 	(c1=="scissors"&&(c2=="paper"||c2=="lizard")) ||
			(c1=="spock"&&(c2=="rock"||c2=="scissors")) ||
			(c1=="lizard"&&(c2=="paper"||c2=="spock")) ) {
				score.textContent = "You win !"
				score.style.backgroundColor = "lightgreen";
			} else {
				score.textContent = "Your opponent win !"
				score.style.backgroundColor = "lightcoral";
			}
	}
}

function randomChoice() {
	var choice = "";
	switch (Math.floor((Math.random() * 50)/10) + 1) {
		case 1:
			choice = "rock"
			break;
		case 2:
			choice = "paper"
			break;
		case 3:
			choice = "scissors"
			break;
		case 4:
			choice = "lizard"
			break;
		case 5:
			choice = "spock"
			break;
		default:
			choice = "rock";
	}
	return choice;
}

function getHand(choice) {
	var hand = "fa fa-5x";
	switch (choice) {
		case "rock":
			hand += " fa-hand-grab-o"
			break;
		case "paper":
			hand += " fa-hand-paper-o"
			break;
		case "scissors":
			hand += " fa-hand-scissors-o"
			break;
		case "lizard":
			hand += " fa-hand-lizard-o"
			break;
		case "spock":
			hand += " fa-hand-spock-o"
			break;
		default:
			hand += " fa-hand-grab-o";
	}
	return hand;
}
