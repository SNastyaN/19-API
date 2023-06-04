let massagesList = document.querySelector('.container');
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
            json.forEach((elem) => {
                  let div = document.createElement('div');
                  div.classList.add('massage');
                  div.innerHTML =`<p>Заголовок:</p>
                  <p>${elem.title}</p><p>Сообщение:</p>
                  <p>${elem.body}</p>
                  `;
                  massagesList.append(div);

            }) 
          
      })
