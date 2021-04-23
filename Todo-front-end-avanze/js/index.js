let app = new Vue({
    el: '#app',
    data: {
      newName:'',
      newDescription:'',
      itemID:'',
      seen: false,
      body: [
        { name: this.newName,description:this.newDescription}
      ],
    },
    methods: {
      AddNewCard: function(){
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        };
        const response = await fetch("https://localhost:44331/api/Items", requestOptions);
        const data = await response.json();
        this.itemId = data.id;
      }
    }
  })