function create(words) {
   const content = document.getElementById('content');

   for (let word of words){
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none'
      div.appendChild(para);
   
      div.addEventListener('click', reveal);
      content.appendChild(div)
   
   
      function reveal(ev) {
         ev.currentTarget.children[0].style.display = '';
      }
   }

}