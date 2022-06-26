document.addEventListener("DOMContentLoaded", () => {
	fetch("https://api.github.com")
   .then(res=> res.json())
   .then (data =>{console.log(data)
		
	  let form =document.querySelector('#github-form')
	  form.addEventListener('submit',(event) =>{
		event.preventDefault()
 
		var search= document.getElementById("search").value
	   
		 const searchData= document.getElementById('user-list')
		 data.profile.forEach(user=>{
		  let list=document.createElement("li")
		  searchData.appendChild(list)
		  list.innerText=user.search
 
		})
 })
	  })
	  .catch(error =>console.log(error))
	 
	 
   
 
 });