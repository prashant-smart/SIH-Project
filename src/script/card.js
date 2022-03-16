let cardcontainer=document.getElementsByClassName('cardcontainer')[0];



collge_Data.forEach((elm)=>{
    let div_html=document.createElement('div');
    div_html.style.width="18rem";
    div_html.className='card'
    div_html.innerHTML=`
    
    <div class="card-body">
    <img class="card-img-top" src="${elm.logo_url}" style="padding: ;" alt="Card image cap">
      <h5 class="card-title" >${elm.name}</h5>
      <p class="card-text" >${elm.location }</p>
      <a href="#" class="btn btn-primary" >Go somewhere</a>
      </div>
 
    `;
    cardcontainer.appendChild(div_html);
    console.log(elm);
})