let but = document.getElementById("but")
let username = document.getElementById("uername")
let textarea = document.getElementById("textarea")
/* let img = document.getElementsByTagName("img")[0]
 */let imgUrl = document.getElementById("imgUrl")


but.addEventListener("click", (e) => {
     e.preventDefault();
     
  fetch("https://68219a2d259dad2655afc2b3.mockapi.io/post", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      textarea: textarea.value,
      img: imgUrl.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
})

//post request
fetch("https://68219a2d259dad2655afc2b3.mockapi.io/post")
  .then((response) => response.json())
  .then((data) => {

    data.forEach((element) => {
      let div = document.createElement("div")
      let div2 = document.createElement("div")
      div.className = "post  border border-2 rounded-3 p-3 mt-3";
       div2.className = "d-flex flex-row flex-wrap justify-content-center align-items-center";
 

      let h3 = document.createElement("h3")
      h3.innerText = element.username
      h3.className = "text-primary pt-3"
      let p = document.createElement("p")
      p.innerText = element.textarea
    let imgpost = document.createElement("img");
      imgpost.src = element.img
      imgpost.width = 200
      let del = document.createElement("button")
      del.innerText = "Delete"

      del.className = "btn btn-danger mb-3"

      del.addEventListener("click", () => {
        del.disabled = true
        fetch(
          `https://68219a2d259dad2655afc2b3.mockapi.io/post/${element.id}`,
          {
            method: "DELETE",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            div.remove()
          })
      })
      div.appendChild(h3)
      div.appendChild(p)
      div.appendChild(imgpost)
      div.appendChild(del)
                  div2.appendChild(div)
                  
      document.body.appendChild(div2)
    })
  })
