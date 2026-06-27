const levelFiles = [
    "levels/placeholder.json"
];

const playerFiles = [
    "stats/username.json"
];

function showPage(pageId){

    document.querySelectorAll('.page').forEach(page=>{
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
}

function showLevel(level){

    document.getElementById("level-name").textContent = level.name;
    document.getElementById("position").textContent = "#" + level.position;
    document.getElementById("creator").textContent = level.creator;
    document.getElementById("verifier").textContent = level.verifier;
    document.getElementById("level-id").textContent = level.id;
    document.getElementById("description").textContent = level.description;

    document.getElementById("level-video").src =
        "https://www.youtube.com/embed/" + level.video;
}

function showPlayer(player){

    document.getElementById("player-name").textContent =
        player.name;

    document.getElementById("player-points").textContent =
        player.points;

    document.getElementById("player-completions").textContent =
        player.completions;

    document.getElementById("player-verifications").textContent =
        player.verifications;
}

async function loadLevels(){

    const list = document.getElementById("level-list");

    for(const file of levelFiles){

        const level =
            await fetch(file).then(r=>r.json());

        const card =
            document.createElement("div");

        card.className = "list-entry";

        card.textContent =
            "#" + level.position + " " + level.name;

        card.onclick = ()=>showLevel(level);

        list.appendChild(card);
    }

    if(levelFiles.length){

        const first =
            await fetch(levelFiles[0])
            .then(r=>r.json());

        showLevel(first);
    }
}

async function loadPlayers(){

    const list =
        document.getElementById("player-list");

    for(const file of playerFiles){

        const player =
            await fetch(file).then(r=>r.json());

        const card =
            document.createElement("div");

        card.className = "list-entry";

        card.textContent =
            player.name;

        card.onclick = ()=>showPlayer(player);

        list.appendChild(card);
    }

    if(playerFiles.length){

        const first =
            await fetch(playerFiles[0])
            .then(r=>r.json());

        showPlayer(first);
    }
}

loadLevels();
loadPlayers();
