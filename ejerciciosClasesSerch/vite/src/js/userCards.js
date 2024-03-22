
export const userCards = ( users  ) =>{

    const cards = users.map( (user, index, array)=> `
    <div class="col-6 col-md-3">
     <div class="card m-2">
         <img src="${user.avatar}" class="card-img-top" alt="${user.first_name}">
         <div class="card-body">
             <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="${user.email}" class="btn btn-primary">E-mail</a>
         </div>
     </div>   
    </div>
    ` );
 
 
     document.getElementById("user-cards").innerHTML = cards.join("");
 
 };