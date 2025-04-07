fetch('/api/projetos')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Erro na requisição:', err));