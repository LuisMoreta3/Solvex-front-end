let app = new Vue({
    el: '#app',
    data: {
      newName:'',
      newAmount:'',
      seen: false,
      cards: [
        { name: 'Gtx 3060',amount:1},
        { name: 'Gtx 3070',amount:0},
        { name: 'Gtx 3080',amount:0}
      ],
    },
    methods: {
      AddNewCard: function(){
        this.cards.push({
            name: this.newName,
            amount: this.newAmount,
        })
        this.newName = '',
        this.newAmount = '';
      }
    }
  })