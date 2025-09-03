
const api = 'https://rickandmortyapi.com/api/episode';
const MAX_PAGES = Infinity;

async function getAllPages() {
    const pages = [];
    let url = api;
    let pageCount = 0;

    while (url && pageCount < MAX_PAGES) {
        const res = await fetch(url);
        const data = await res.json();
        pages.push(data.results);
        url = data.info.next;
        pageCount++;
    }
    
    return pages;
    
}

function CardItems(item) {
  const characters = Array.isArray (item.characters) ? item.characters.length: 0;
  const createdDate = new Date (item.created).toLocaleDateString('ru-Ru');
  const charactersList = Array.isArray(item.characters) 
  ? item.characters.slice(0, 3).join(', ') + (item.characters.length > 3 ? ' ...' : '')
  : '';
  
  const lines = [
    `AirDate: ${item.air_date}`,
    `Characters: ${charactersList}`,
    `Episode: ${item.episode}`,
    `Id: ${item.id}`,
    `Name: ${item.name}`,
    `Url: ${item.url}` //тут все записано в столбик, чтобы были разные спаны
  ];

  const card = document.createElement ('div')
  card.className = 'card';

  lines.forEach (text => {
    const span = document.createElement ('span');
    span.textContent = text;
    span.className = 'line';
    card.appendChild (span);
  });

  return card;
}

  (async () => {
    const container = document.getElementById ('container');
    container.innerHTML = '';

    const pages = await getAllPages();

    pages.forEach ((pageItems, idx) => {
      const section = document.createElement ('section');
      section.className = 'block';

      const title = document.createElement ('h2');
      title.className = 'name';
      title.textContent = `API ${idx + 1}`;
      section.appendChild (title);

      const grid = document.createElement ('div');
      grid.className = 'grid';

      pageItems.forEach (item => grid.appendChild(CardItems(item)));

      section.appendChild (grid);
      container.appendChild (section);
    });
})().catch(console.error);

