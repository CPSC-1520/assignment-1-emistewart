
// Please refer to the "Required Tasks in the assignments PDF"

// html for the add cheep create function
/*
  <div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" src="ALBUM IMAGE SELECTION HERE"/>
      <div class="card-body">
        <h5 class="card-title">ALBUM DESCRIPTION HERE</h5>
        <p class="card-text">ALBUM TITLE HERE</p>
      </div>
    </div>
  </div>
*/
// intercept form
let albumForm = document.querySelector("#album-form")

albumForm.addEventListener("sumbit", (event)=> {
  event.preventDefault()
  //get form values
  let title = event.target.elemets["album-title"].value
  let description = event.target.elements["album-description"].value
  let art = event.target.elements["album-art"].value

  // add item
  addAlbumItem(title, description, art)

  // reset values
  event.target.elements["album-title"].value = ""
  event.target.elements["album-description"].value = ""
  event.target.elements["album-art"].value = ""
})