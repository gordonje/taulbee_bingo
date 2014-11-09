$(document).ready(function() {
// reading the tile data, making the card
	$.get( "tiles.txt", function( data ) {
		tiles = data.split("\n")
		makeCard(tiles);
// tile highlight toggling
	$('td').click(function() {
		$(this).toggleClass('clicked');  
	});
	$('td').hover(function() {
		$(this).toggleClass('hovering');
    });
	});
});

function makeCard(array) {
	for (i = 0; i < 5; i++) {

		cells = ""

		for (j = 0; j < 5; j++) {

			if (i == 2 && j == 2) {
				// this is where the free space is set
				cells += "<td>Sam Farts</td>";
			} else {
				cells += "<td>" + array.splice(Math.floor(Math.random() * array.length), 1) + "</td>";
			}

		};

		$("#card tbody").append("<tr>" + cells + "</tr>");

	};
};