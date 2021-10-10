function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const input = document.getElementById('searchField')
      let inputText = input.value;
      let tableElements = Array.from(document.querySelectorAll('tbody tr'));

      tableElements.forEach((el) => {
         let text = el.textContent.toLowerCase();
         if (el.textContent.includes(inputText)) {
            el.classList.add('select');
         } else {
            el.classList.remove('select')
         }
      })
      input.value = ''
   }
}