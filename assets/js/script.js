
 let ApiData = [];   // An empty Array

fetch("https://reqres.in/api/users?page=2")  //Fetch data from api
  .then((res) => {
    return res.json();   // Then method res as a json file
  })
  .then((users) => {
    console.log(users);
    
    ApiData = users.data;
    ApiData.map((el) => {
      createEl(el);    // passe the parameter
    });
  })
  .catch((err) => {     // catch err methode
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





