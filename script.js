// Animação passar o mouse por skills
const skills = document.querySelectorAll('.skills-list li');
skills.forEach(skill => {
  skill.addEventListener('mouseover', () => {
    skill.style.transition = 'transform 0.3s';
    skill.style.transform = 'rotate(5deg)';
  });

  skill.addEventListener('mouseout', () => {
    skill.style.transform = 'rotate(0deg)';
  });
});

// Animação de passar o mouse por projetos
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('mouseover', () => {
    project.style.transition = 'box-shadow 0.3s ease-in-out';
    project.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
  });

  project.addEventListener('mouseout', () => {
    project.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
  });
});
document.querySelectorAll('.skills-list li').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.2) rotateY(20deg)';
    });
    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1) rotateY(0deg)';
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let nomeElement = document.getElementById("nome");
    let nomeText = nomeElement.innerText;
  
    // Limpa o conteúdo atual do elemento
    nomeElement.innerHTML = ''; 
  
   
    let palavras = nomeText.split(' ');
  
    palavras.forEach(function (palavra, index) {
      // Para cada palavra, cria um contêiner <span> para cada letra
      let palavraSpan = document.createElement('span');
      
      // Divide a palavra em letras e coloca cada uma em um <span>
      palavra.split('').forEach(function (letra) {
        let letraSpan = document.createElement('span');
        letraSpan.innerText = letra;
        palavraSpan.appendChild(letraSpan);
      });
  
      // Adiciona a palavra ao título
      nomeElement.appendChild(palavraSpan);
  
     
      if (index < palavras.length - 1) {
        nomeElement.appendChild(document.createTextNode(' ')); // Adiciona um espaço ao nome e sobrenome
      }
    });
  });
  
  