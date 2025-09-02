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

const url = 'https://rickandmortyapi.com/api/character';
const newSpan = document.createElement('span');

fetch(url)
  .then(response => response.json())
  .then(({ results }) => {
    const container = document.getElementById ('container');
    const item = results[0]; //первую строчку берет (Рик)
    const episodesCount = item.episode.length; // делает цирфу из перечисленных эпизодов
    const createdDate = new Date(item.created).toLocaleDateString('ru-RU'); //форматирует дату

    const lines = [
      `Имя: ${item.name}`,
      `Статус: ${item.status}`,
      `Пол: ${item.gender}`,
      `Создан: ${createdDate}`,
      `Эпизодов: ${episodesCount}`,
      `ID: ${item.id}` //тут все записано в столбик, чтобы были переносы с варп в ксс
    ];

    lines.forEach (text => {
      const span = document.createElement('span');
      span.textContent = text;
      span.style.display = 'flex';
      span.style.justifyContent = 'center';
      span.style.alignItems = 'center';
      span.style.height = '25px';
      span.style.backgroundColor = 'white';
      span.style.borderRadius = '10px';
      container.appendChild (span);
    });
    })

newSpan.className = 'span';

//______________________________________лучше, но не то______________________________________//