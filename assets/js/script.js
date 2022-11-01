
let ApiData = [];

fetch("https://reqres.in/api/users?page=2")
  .then((res) => {
    return res.json();
  })
  .then((users) => {
    console.log(users);
    
    ApiData = users.data;
    ApiData.map((el) => {
      createEl(el);
    });
  })
  .catch((err) => {
    console.error("error");
  });

const createEl = (user) => {
  let htmlS = `
    <figure class="container">
		<img src="${user.avatar}">
		<figcaption>
		<h2>${user.first_name} ${user.last_name}</h2>
		<p>${user.email}</p>
		</figcaption>
   </figure>
		`;
  document.getElementById("app").innerHTML += htmlS;
  console.log(htmlS);
};

