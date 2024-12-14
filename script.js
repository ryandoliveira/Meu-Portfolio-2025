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

// Animação de escadinha nas letras do nome
document.addEventListener("DOMContentLoaded", function () {
  let nomeElement = document.getElementById("nome");
  let nomeText = nomeElement.innerText;
  
  
  nomeElement.innerHTML = '';

  // Divide o nome em palavras
  let palavras = nomeText.split(' ');

  palavras.forEach(function (palavra, index) {
    // Cria um contêiner <span> para cada palavra
    let palavraSpan = document.createElement('span');
    
    // Divide a palavra em letras e coloca cada uma em um <span>
    palavra.split('').forEach(function (letra, letraIndex) {
      let letraSpan = document.createElement('span');
      letraSpan.innerText = letra;
      
      // Aplica a animação 
      letraSpan.style.display = 'inline-block';
      letraSpan.style.animation = 'escadinha 1s ease-in-out infinite';
      
      // Atraso para as letras ímpares e pares
      if (letraIndex % 2 === 0) {
        letraSpan.style.animationDelay = '0.1s';
      } else {
        letraSpan.style.animationDelay = '0.2s';
      }
      
      // Adiciona a letra ao contêiner da palavra
      palavraSpan.appendChild(letraSpan);
    });
    
    // Adiciona a palavra ao título
    nomeElement.appendChild(palavraSpan);
    
  
    nomeElement.appendChild(document.createTextNode(' '));
  });
});
