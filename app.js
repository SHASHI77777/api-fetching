let root=document.getElementById('root')

let apiurl=fetch('https://api.github.com/users')

// console.log(apiurl);


let data =apiurl.then((resp)=>{
     return resp.json()
})

data.then((arr)=>{
    // console.log(arr);   
    arr.map((elem)=>{
        // console.log(elem.login);

        root.innerHTML+= ` 
        <div class=card>    
          <img src=${elem.avatar_url}>
          <div>${elem.login}</div>
        </div>`
                       
    })
})