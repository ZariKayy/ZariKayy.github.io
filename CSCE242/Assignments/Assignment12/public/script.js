async function displaySongs(){
    let response = await fetch('/api/songs/');
    let songsJSON = await response.json();
    let songsDiv = document.getElementById("song-list");
    songsDiv.innerHTML = "";

    for(i in songsJSON){
        let song = songsJSON[i];
        songsDiv.append(getSongItem(song));
    }
}

function getSongItem(song){
    let songSection = document.createElement("section");
    songSection.classList.add("song-section");
    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", song.id);
    aTitle.href = "#";
    aTitle.onclick = showSongDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.innerHTML = song.title;
    songSection.append(h3Elem);
    aTitle.append(h3Elem);
    songSection.append(aTitle);

    return songSection;
}

async function showSongDetails(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/songs/${id}`);

    if(response.status != 200) {
        console.log("error receiving song");
        return;
    }

    let song = await response.json();
    document.getElementById("song-id").textContent = song.id;
    document.getElementById("txt-title").value = song.title;
    document.getElementById("txt-artist").value = song.artist;
    document.getElementById("txt-album").value = song.album;
    document.getElementById("txt-year").value = song.year;
}

async function addSong() {
    let songTitle = document.getElementById("txt-add-title").value;
    let songArtist = document.getElementById("txt-add-artist").value;
    let songAlbum = document.getElementById("txt-add-album").value;
    let songYear = document.getElementById("txt-add-year").value;

    let song = {"title":songTitle, "artist":songArtist, "album":songAlbum, "year":songYear};

    let response = await fetch('/api/songs',{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(song)
    });

    if(response.status != 200) {
        console.log("error posting data");
        let errorMessage = document.getElementById("error-add");
        errorMessage.classList.remove("success-message");
        errorMessage.classList.add("error-message");
        errorMessage.innerHTML = "ERROR; please enter valid information";
        setTimeout(function(){
            errorMessage.innerHTML="";
        }, 3000);
        return;
    }

    let successMessage = document.getElementById("error-add");
    successMessage.classList.remove("error-message");
    successMessage.classList.add("success-message");
    successMessage.innerHTML = "Success! Song Added.";
    setTimeout(function(){
        successMessage.innerHTML="";
    }, 3000);

    let result = await response.json();
    console.log(result);
    displaySongs();
}

async function editSong(){
    let songId = document.getElementById("song-id").textContent;
    let songTitle = document.getElementById("txt-title").value;
    let songArtist = document.getElementById("txt-artist").value;
    let songAlbum = document.getElementById("txt-album").value;
    let songYear = document.getElementById("txt-year").value;
    let song = {"title":songTitle, "artist":songArtist, "album":songAlbum, "year":songYear};

    let response = await fetch(`/api/songs/${songId}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(song)
    });

    if(response.status != 200){
        console.log("error editing song");
        let errorMessage = document.getElementById("error-edit");
        errorMessage.classList.remove("success-message");
        errorMessage.classList.add("error-message");
        errorMessage.innerHTML = "ERROR; please enter valid information";
        setTimeout(function(){
            errorMessage.innerHTML="";
        }, 3000);
        return;
    }

    let successMessage = document.getElementById("error-edit");
    successMessage.classList.remove("error-message");
    successMessage.classList.add("success-message");
    successMessage.innerHTML = "Success! Song Edited.";
    setTimeout(function(){
        successMessage.innerHTML="";
    }, 3000);

    let result = await response.json();
    displaySongs();
}

async function deleteSong() {
    let songId = document.getElementById("song-id").textContent;

    let response = await fetch(`/api/songs/${songId}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        }
    });

    if(response.status != 200){
        console.log("error deleting song");
        return;
    }

    let result = await response.json();
    displaySongs();
}

window.onload = function(){
    this.displaySongs();

    let addBtn = document.getElementById("btn-add-song");
    addBtn.onclick = addSong;

    let editBtn = document.getElementById("btn-edit-song");
    editBtn.onclick = editSong;

    let deleteBtn = document.getElementById("btn-delete-song");
    deleteBtn.onclick = deleteSong;
}