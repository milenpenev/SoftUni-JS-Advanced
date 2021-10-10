function search() {
   const elements = Array.from(document.querySelectorAll('ul li'));
   const text = document.getElementById('searchText').value;
   let index = 0;
   elements.forEach((el) => {
      if (el.textContent.includes(text)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         index += 1;
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = '';
      }
      document.getElementById('result').textContent = `${index} matches found`
   })
}
