// var app = document.getElementById('app');
// console.log(app)
// console.log(app.innerHTML)

// document.getElementById('app').innerHTML = "howdy"


(function(exports) {
    
    function NoteController(noteList) {
        this.noteList = noteList;
        this.noteList.createNote("hello Shubs")
        this.notelistview = new NoteListView(this.noteList)
    }

    NoteController.prototype.changeHtml = function() {
        document.getElementById('app').innerHTML = this.notelistview.displayHtml();
    }

    exports.NoteController = NoteController;
}) (this)

var notelist = new NoteList();

var controller = new NoteController(notelist);

controller.changeHtml()
