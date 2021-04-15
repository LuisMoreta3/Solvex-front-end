const itemForm = document.getElementById('ItemBody');

itemForm.addEventListener('submit', function(e){
    e.preventDefault();
    const nameItem = document.getElementById('name');
    const descriptionItem = document.getElementById('description');
    let data = { Name: `${nameItem}`,Description:`${descriptionItem}`}
    fetch('https://localhost:44331/api/Items', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
})



