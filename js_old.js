// const url = 'https://rickandmortyapi.com/api/character'; // присваивает url ссылку
// const newSpan = document.createElement('span'); // создает спан

// fetch(url)
//   .then(response => response.json()) //ответ от api преобразует в .json
//   .then(({ results }) => { //чет там деконструирует (({results}))
//     const container = document.getElementById ('container'); // присваивает поиск контейнера в переменную 
//     const item = results[0]; // присваивает переменной итем строку 0 в дата
//     newSpan.textContent = `Created: ${item.created}, Episode: ${item.episode}, Gender: ${item.gender}, Id: ${item.id}}`; // перечисление и вставка из апи
//     container.appendChild(newSpan); //апендид в контейнер спан
//     })

// newSpan.className = 'span';

//______________________________________выглядит не красиво!______________________________________//

const url = 'https://rickandmortyapi.com/api/episode';
const newSpan = document.createElement('span');

fetch(url)
  .then(response => response.json())
  .then(({ results }) => {
    const container = document.getElementById ('container');
    results.forEach (item => {
    const characters = Array.isArray (item.character) ? item.characters.length: 0;
    const createdDate = new Date (item.created).toLocaleDateString('ru-Ru');


    const lines = [
      `AirDate: ${item.air_date}`,
      `Characters: ${item.characters}`,
      `Episode: ${item.episode}`,
      `Id: ${item.id}`,
      `Name: ${item.name}`,
      `Url: ${item.url}` //тут все записано в столбик, чтобы были разные спаны
    ];


    container.appendChild (newSpan);
    
  lines.forEach (text => {
      const span = document.createElement('span');
      span.textContent = text;
      span.style.display = 'flex';
      span.style.justifyContent = 'center';
      span.style.alignItems = 'center';
      span.style.height = '25px';
      span.style.backgroundColor = 'white';
      span.style.borderRadius = '10px';
      span.style.overflow = 'hidden';
      span.style.whitespace = 'wrap';
      container.appendChild (span);
  });
  })
})

    
newSpan.className = 'span';

// const url = 'https://rickandmortyapi.com/api/episode';

// fetch(url)
//   .then(response => response.json()) // преобразуем ответ в JSON
//   .then(data => {
//     console.log(data);          // выводим весь объект API
//     console.log(data.results);  // выводим только массив персонажей
//     console.log(data.results[0]); // выводим только первого персонажа
//   })
//   .catch(error => console.error('Ошибка:', error));

    // const card = document.createElement('div');
    // card.className = 'card';
    // lines.forEach(text => {
    //   const span = document.createElement ('span')
    //   span.textContent = 'text';
    //   span.className = 'span';
    //   card.appendChild (span);
    // })