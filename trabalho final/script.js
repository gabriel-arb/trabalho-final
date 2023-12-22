document.addEventListener('DOMContentLoaded', function () {

    function toggleTheme() {
      const body = document.body;
      const header = document.querySelector('header');
      const nav = document.querySelector('nav');
      const conteudo = document.querySelector('.conteudo');
      const footer = document.querySelector('footer');
  
      body.classList.toggle('dark-theme');
      header.classList.toggle('dark-theme');
      nav.classList.toggle('dark-theme');
      conteudo.classList.toggle('dark-theme');
      footer.classList.toggle('dark-theme');
    }
  

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    function solicitarNota() {
 
      const nota = prompt('Qual nota você daria para este site? (Digite um número de 1 a 10)');
  
      if (nota !== null && !isNaN(nota) && nota !== '') {
        const notaFormatada = parseFloat(nota);
        
        if (notaFormatada >= 1 && notaFormatada <= 10) {
          alert(`Você deu a nota: ${notaFormatada.toFixed(1)}`);
        } else {
          alert('Por favor, insira uma nota válida entre 1 e 10.');
        }
      } else {
        alert('Você cancelou ou não inseriu uma nota válida.');
      }
    }
  

    const notaBtn = document.getElementById('nota-btn');
    if (notaBtn) {
      notaBtn.addEventListener('click', solicitarNota);
    }
  });
  
  