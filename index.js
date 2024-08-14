const thead = document.getElementById("thead");
const result = document.getElementById("result");
const title = document.getElementById("title");

async function getUsers() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const users = await response.json();
   displayUsers(users);
}

async function getTodos() {
   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
   const todos = await response.json();
   displayTodos(todos);
}

async function getAlbums() {
   const response = await fetch("https://jsonplaceholder.typicode.com/albums");
   const albums = await response.json();
   displayAlbums(albums);
}

async function getPhotos() {
   const response = await fetch("https://jsonplaceholder.typicode.com/photos");
   const photos = await response.json();
   displayPhotos(photos);
}

async function getComments() {
   const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
   );
   const comments = await response.json();
   displayComments(comments);
}

function displayUsers(users) {
   result.innerHTML = "";
   title.innerText = "Users List";
   thead.innerHTML = "";
   let tr = document.createElement("tr");
   tr.innerHTML = `<th>#</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone</th><th>Website</th>`;
   thead.appendChild(tr);
   users.forEach((element, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
     <td>${index + 1}</td>
     <td>${element.name}</td>
     <td>${element.username}</td>
     <td>${element.email}</td>
     <td>${element.address.street}</td>
     <td>${element.phone}</td>
     <td>${element.website}</td>
     `;
      result.appendChild(tr);
   });
}

function displayTodos(todos) {
   result.innerHTML = "";
   title.innerText = "Todos List";
   thead.innerHTML = "";
   let tr = document.createElement("tr");
   tr.innerHTML = `<th>#</th><th>User Id</th><th>Id</th><th>Title</th><th>Completed</th>`;
   thead.appendChild(tr);
   todos.forEach((element, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
     <td>${index + 1}</td>
     <td>${element.userId}</td>
     <td>${element.id}</td>
     <td>${element.title}</td>
     <td>${element.completed}</td>
     `;
      result.appendChild(tr);
   });
}

function displayAlbums(albums) {
   result.innerHTML = "";
   title.innerText = "Albums List";
   thead.innerHTML = "";
   let tr = document.createElement("tr");
   tr.innerHTML = `<th>#</th><th>User Id</th><th>Id</th><th>Title</th>`;
   thead.appendChild(tr);
   albums.forEach((element, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
     <td>${index + 1}</td>
     <td>${element.userId}</td>
     <td>${element.id}</td>
     <td>${element.title}</td>
     `;
      result.appendChild(tr);
   });
}

function displayPhotos(photos) {
   result.innerHTML = "";
   title.innerText = "Photos List";
   thead.innerHTML = "";
   let div = document.createElement("div");
   div.innerHTML = `
   <div class="card bg-black">
      <div class="card-body d-flex justify-content-between text-white">
         <h5 class="card-title">Album Id</h5><h5 class="card-title">Id</h5><h5 class="card-title">Title</h5><h5 class="card-title">photo</h5>
      </div>
   </div>   
      `;
   result.appendChild(div);
   photos.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <div class="card mb-3">
         <div class="card-body d-flex justify-content-between align-items-center gap-3 bg-light">
            <div class="d-flex align-items-center gap-3">
               <h5 class="card-title">${element.albumId}</h5>
               <h5 class="card-title">ID: ${element.id}</h5>
            </div>
            <h5 class="card-title">${element.title}</h5>
            <img src="${element.thumbnailUrl}" alt="${element.title}" />
         </div>
      </div>
      `;
      result.appendChild(div);
   });
}

function displayComments(comments) {
   result.innerHTML = "";
   title.innerText = "Comments List";
   thead.innerHTML = "";
   let tr = document.createElement("tr");
   tr.innerHTML = `<th>#</th><th>PostId</th><th>Id</th><th>Name</th><th>Email</th><th>Body</th>`;
   thead.appendChild(tr);
   comments.forEach((element, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
     <td>${index + 1}</td>
     <td>${element.postId}</td>
     <td>${element.id}</td>
     <td>${element.name}</td>
     <td>${element.email}</td>
     <td>${element.body}</td>
     `;
      result.appendChild(tr);
   });
}
