fetch('/api/projetos')
  .then(res => res.json())
  .then(data => console.log('✅ Dados recebidos:', data))
  .catch(err => console.error('❌ Erro na API:', err));