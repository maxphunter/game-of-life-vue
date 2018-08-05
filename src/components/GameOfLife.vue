<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h4> Initial State </h4>
    <div class="game-board">
    <div class='row'
    v-for="(row, rowIndex) in initialState"
    :key="rowIndex">
      <span
      v-for="(cell,cellIndex) in row"
      :key="cellIndex" >
      <span v-on:click="toggleCellState(rowIndex,cellIndex)" class="game-board--cell" >
         {{ showCellState(cell) }}</span>

      </span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'Game Of Life',
      initialState: [[true, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, true, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false]]
    }
  },
  methods: {
    toggleCellState (rowIndex, cellIndex) {
      this.initialState[rowIndex].splice(cellIndex, 1, !this.initialState[rowIndex][cellIndex])
    },
    showCellState (cell) {
      return cell ? 'x' : '.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
.game-board{
  font-family: 'Roboto Mono', monospace;

}

.game-board--cell{
  cursor:pointer;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
