function addSong() {
    var ul = document.getElementById("songList");
    var songName = document.getElementById("song").value;
    var li = document.createElement("li");
    li.innerHTML=songName;
    ul.appendChild(li);
}