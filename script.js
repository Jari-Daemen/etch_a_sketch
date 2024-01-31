// Initially load in a 16x16 grid


function load_grid(dimensions){
    let body = document.querySelector("body");

    // Remove existing board containers
    let flag = document.querySelector(".board_container");
    if (flag !== null){
        body.removeChild(flag);
    }

    // Make a (new) container
    let board_container = document.createElement("div");
    board_container.classList.add("board_container");

    // Dynamic sizing for tiles
    let tile_height = Math.round(10000/dimensions)/100;
    console.log(tile_height);

    // Populate container
    for (let i = 0; i < dimensions; i++){
        let row_container = document.createElement("div");
        row_container.classList.add("row_container");
        for (let j = 0; j < dimensions; j++){
            let board_tile = document.createElement("div");
            // Stylize tiles
            board_tile.style.height = `${tile_height}%`;
            board_tile.classList.add("board_tile");
            board_tile.addEventListener("mouseover", () => {board_tile.style.backgroundColor = "cyan"});
            row_container.appendChild(board_tile);
        }
        board_container.appendChild(row_container);
    }

    // Append board_container
    body.appendChild(board_container);

    //
    return;
}

load_grid(116);
load_grid(5);



