let myGame = {gameLink: "https://mlsmason6.github.io/improved-computing-machine-colorName/", gameRepo: "https://github.com/MLSMason6/improved-computing-machine-colorName"}
const people = {
  "person1": {
    "author": "John Doe",
    "gameURL": "https://mlsmason6.github.io/improved-computing-machine-colorName/"
,
    "gameRepo": "https://github.com/MLSMason6/improved-computing-machine-colorName"
  },
  "person2": {
    "author": "Jane Smith",
    "gameURL": "Developer",
    "gameRepo": 60000
  }
};


$('body').append(`<a href="${myGame.gameLink}" target="_blank">Mason's colorName App</a>`);
$('body').append(`<br><br><a href="${myGame.gameRepo}" target="_blank">Mason's Repo</a>`);


$('#project').append(`
  <div class="col-md-4">
        <div class="card">
          
          <div class="card-body">
            <h5 class="card-title">ColorName Computing Machine</h5>
            <p class="card-text"></p>
            <a href="${people.gameRepo}" class="btn btn-primary" target="_blank">View Page</a>
          </div>
        </div>
      </div>`
                    );