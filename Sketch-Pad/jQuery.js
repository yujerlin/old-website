var color = "black";

$(document).ready(function(){
	$("body").append('<button id="newPad" type="button"> New Pad </button>');
	$("body").append('<div class="colors"></div>');
	$(".colors").append('<button id="red" type="button">  </button>');
	$(".colors").append('<button id="blue" type="button">  </button>');
	$(".colors").append('<button id="green" type="button">  </button>');
	$(".colors").append('<button id="white" type="button">  </button>');
	$(".colors").append('<button id="black" type="button">  </button>');
	$("body").append('<div class="container"></div>');

	init_grid(16);
	hover();

	$("#newPad").on("click", function() {
		var size = parseInt(prompt("Enter a new pad size:"));
		$(".grid").remove();
		$("#size").remove();
		init_grid(size);
		hover();
	});

	$("#red").on("click", function() {
		color = "red";
	});

	$("#blue").on("click", function() {
		color = "blue";
	});
	$("#green").on("click", function() {
		color = "green";
	});
	$('#white').on("click", function() {
		color = "white";
	});
	$('#black').on("click", function() {
		color = "black";
	});
});





function init_grid(size){
	if (size < 0 || isNaN(size)){size = 0};
	$("body").prepend('<h1 id="size">' + size + 'x' + size +' grids</h1>');
	for (i=0; i<size; i++){
		for(j=0;j<size;j++){
			$(".container").append('<div class ="grid"></div>');
		}
		$(".container").append('<div class ="new_row"></div>');
	}
}

function hover(){
	$(".grid").mouseenter(function(){
	$(this).addClass(color)
	});
}

