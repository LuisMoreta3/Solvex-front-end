Vue.component("lessonOne", {
    props: ["cards"],
    template: `
    <div class="lists">
    <h3>Item List</h3>
        <div v-for="card in cards">
            <div class="data" >
            {{body.name}}
            <button class="btn btn-danger">-</button>
            <button class="btn btn-success">+</button>
            </div>           
        </div>
    </div>`,
  });