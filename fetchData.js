const container = document.getElementById('container-links');

(async () => {
  const response = await fetch('data/links.json');
  const data = await response.json();

  data.map(link => {
    if(link.isHighlight) {
      container.innerHTML += `<li><a class='highlight' href='${link.url}'>${link.name}</a></li>`;
      return;
    }
    container.innerHTML += `<li><a href='${link.url}'>${link.name}</a></li>`;
  })
})();