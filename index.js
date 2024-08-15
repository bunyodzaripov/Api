const thead = document.getElementById("thead");
const result = document.getElementById("result");
const title = document.getElementById("title");
const pagination = document.getElementById("pagination");
let currentPage = 1;
let items_per_page = 5;

let users = [];
let todos = [];
let albums = [];
let photos = [];
let comments = [];

async function getUsers() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const user = await response.json();
   users.push(...user);
   displayUsers(user);
   paginationUsers();
}

async function getTodos() {
   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
   const todo = await response.json();
   todos.push(...todo);
   displayTodos(todo);
   paginationTodos();
}

async function getAlbums() {
   const response = await fetch("https://jsonplaceholder.typicode.com/albums");
   const album = await response.json();
   albums.push(...album);
   displayAlbums(album);
   paginationAlbums();
}

async function getPhotos() {
   const response = await fetch("https://jsonplaceholder.typicode.com/photos");
   const photo = await response.json();
   photos.push(...photo);
   displayPhotos(photo);
   paginationPhotos();
}

async function getComments() {
   const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
   );
   const comment = await response.json();
   comments.push(...comment);
   displayComments(comment);
   paginationComments();
}

function displayUsers(users) {
   result.innerHTML = "";
   title.innerText = "Users List";
   thead.innerHTML = "";
   let start_index = (currentPage - 1) * items_per_page;
   let end_index = start_index + items_per_page;
   let pagination_users = users.slice(start_index, end_index);

   let tr = document.createElement("tr");
   tr.innerHTML = `<th>#</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone</th><th>Website</th>`;
   thead.appendChild(tr);
   pagination_users.forEach((element, index) => {
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
   paginationUsers();
}

function paginationUsers() {
   pagination.innerHTML = "";
   let page_count = Math.ceil(users.length / items_per_page);
   for (let i = 1; i <= page_count; i++) {
      if (i >= currentPage - 1 && i <= currentPage + 1) {
         let btn = document.createElement("button");
         btn.innerText = i;
         btn.className =
            currentPage === i ? "btn btn-primary" : "btn btn-outline-primary";
         btn.addEventListener("click", () => {
            currentPage = i;
            displayUsers(users);
         });
         pagination.appendChild(btn);
      }
   }
}

function displayTodos(todos) {
   result.innerHTML = "";
   title.innerText = "Todos List";
   thead.innerHTML = "";
   let start_index = (currentPage - 1) * items_per_page;
   let end_index = start_index + items_per_page;
   let pagination_todos = todos.slice(start_index, end_index);

   let tr = document.createElement("tr");
   tr.innerHTML = `<th>#</th><th>User Id</th><th>Id</th><th>Title</th><th>Completed</th>`;
   thead.appendChild(tr);
   pagination_todos.forEach((element, index) => {
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

function paginationTodos() {
   pagination.innerHTML = "";
   let page_count = Math.ceil(todos.length / items_per_page);
   for (let i = 1; i <= page_count; i++) {
      if (i >= currentPage - 1 && i <= currentPage + 1) {
         let btn = document.createElement("button");
         btn.innerText = i;
         btn.className =
            currentPage === i ? "btn btn-primary" : "btn btn-outline-primary";
         btn.addEventListener("click", () => {
            currentPage = i;
            displayTodos(todos);
         });
         pagination.appendChild(btn);
      }
   }
}

function displayAlbums(albums) {
   result.innerHTML = "";
   title.innerText = "Albums List";
   thead.innerHTML = "";

   let start_index = (currentPage - 1) * items_per_page;
   let end_index = start_index + items_per_page;
   let pagination_albums = albums.slice(start_index, end_index);

   let tr = document.createElement("tr");
   tr.innerHTML = `<th>#</th><th>User Id</th><th>Id</th><th>Title</th>`;
   thead.appendChild(tr);
   pagination_albums.forEach((element, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
     <td>${index + 1}</td>
     <td>${element.userId}</td>
     <td>${element.id}</td>
     <td>${element.title}</td>
     `;
      result.appendChild(tr);
   });

   paginationAlbums();
}

function paginationAlbums() {
   pagination.innerHTML = "";
   let page_count = Math.ceil(albums.length / items_per_page);
   for (let i = 1; i <= page_count; i++) {
      if (i >= currentPage - 1 && i <= currentPage + 1) {
         let btn = document.createElement("button");
         btn.innerText = i;
         btn.className =
            currentPage === i ? "btn btn-primary" : "btn btn-outline-primary";
         btn.addEventListener("click", () => {
            currentPage = i;
            displayAlbums(albums);
         });
         pagination.appendChild(btn);
      }
   }
}

function displayPhotos(photos) {
   result.innerHTML = "";
   title.innerText = "Photos List";
   thead.innerHTML = "";

   let start_index = (currentPage - 1) * items_per_page;
   let end_index = start_index + items_per_page;
   let pagination_photos = photos.slice(start_index, end_index);

   let div = document.createElement("div");
   div.innerHTML = `
   <div class="card bg-black">
      <div class="card-body d-flex justify-content-between text-white">
         <h5 class="card-title">Album Id</h5><h5 class="card-title">Id</h5><h5 class="card-title">Title</h5><h5 class="card-title">photo</h5>
      </div>
   </div>   
      `;
   result.appendChild(div);
   pagination_photos.forEach((element) => {
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

   paginationPhotos();
}

function paginationPhotos() {
   pagination.innerHTML = "";
   let page_count = Math.ceil(photos.length / items_per_page);
   for (let i = 1; i <= page_count; i++) {
      if (i >= currentPage - 1 && i <= currentPage + 1) {
         let btn = document.createElement("button");
         btn.innerText = i;
         btn.className =
            currentPage === i ? "btn btn-primary" : "btn btn-outline-primary";
         btn.addEventListener("click", () => {
            currentPage = i;
            displayPhotos(photos);
         });
         pagination.appendChild(btn);
      }
   }
}

function displayComments(comments) {
   result.innerHTML = "";
   title.innerText = "Comments List";
   thead.innerHTML = "";

   let start_index = (currentPage - 1) * items_per_page;
   let end_index = start_index + items_per_page;
   let pagination_comments = comments.slice(start_index, end_index);
   let tr = document.createElement("tr");
   tr.innerHTML = `<th>#</th><th>PostId</th><th>Id</th><th>Name</th><th>Email</th><th>Body</th>`;
   thead.appendChild(tr);
   pagination_comments.forEach((element, index) => {
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

   paginationComments();
}

function paginationComments() {
   pagination.innerHTML = "";
   let page_count = Math.ceil(comments.length / items_per_page);
   for (let i = 1; i <= page_count; i++) {
      if (i >= currentPage - 1 && i <= currentPage + 1) {
         let btn = document.createElement("button");
         btn.innerText = i;
         btn.className =
            currentPage === i ? "btn btn-primary" : "btn btn-outline-primary";
         btn.addEventListener("click", () => {
            currentPage = i;
            displayComments(comments);
         });
         pagination.appendChild(btn);
      }
   }
}
