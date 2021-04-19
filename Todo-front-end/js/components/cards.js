Vue.component("lessonOne", {
    props: ["cards"],
    template: `
    <div class="lists">
    <h3>Graphics cards list</h3>
        <div v-for="card in cards">
            <div class="data" >
            {{card.name}}
            <span v-if='card.amount > 0'> - In Stock</span>
            <span v-else='card.amount === 0'> - out of Stock</span>
            <button class="btn btn-danger" @click="card.amount--">-</button>
            <button class="btn btn-success" @click="card.amount++">+</button>
            </div>           
        </div>
    </div>`,
  });