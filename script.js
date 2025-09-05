
let API_URL = 'https://rickandmortyapi.com/api/episode';
const MAX_PAGES = Infinity;

const getAllPages = async () => {
    const items = [];
    let URL = API_URL; //не трогаем исходный юрл, ток с рабочим работаем, иначе далее юрл перезаписывается

    while (URL) {
        const res = await fetch(URL);
        const data = await res.json();
        items.push(...data.results);
        URL = data.info.next; //тут перезаписывается. Хоть API_URL дальше не употребляется, но а почему не сделать отдельный чтобы с ним работать и тот оставить 
    }
    
    return items;
    
}

cardItems = (item) => {
  const createdDate = new Date (item.created).toLocaleDateString('ru-RU');
  const charactersList = Array.isArray(item.characters)  // определяет, что это массив
  ? item.characters.slice(0, 3).join(', ') + (item.characters.length > 3 ? ' ...' : '') // режет массив, оч много ссылок внутри "чарактерс", нужно было уменьшить отображение
  : '';

  const lines = [
    `AirDate: ${item.air_date}`,
    `Characters: ${charactersList}`,
    `Episode: ${item.episode}`,
    `Id: ${item.id}`,
    `Name: ${item.name}`,
    `Url: ${item.url}`
  ];

  const card = document.createElement ('div')
  card.className = 'card';

  lines.forEach (text => {
    const span = document.createElement ('span');
    span.textContent = text;
    span.className = 'span__line';
    card.appendChild (span);
  });

  return card;
}

(async () => {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const episodes = await getAllPages();
  const grid = document.createElement('div');
  grid.className = 'body__list__grid';

  episodes.forEach(ep => grid.appendChild(cardItems(ep)));
  container.appendChild(grid);
})().catch(console.error);