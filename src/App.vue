<script setup lang="ts"></script>

<template>
  <div class="board">
    <div class="column">
      <h2 class="column-heading">Column</h2>
      <div class="cards">
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
      </div>
    </div>

    <div class="column">
      <h2 class="column-heading">Column</h2>
      <div class="cards">
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
      </div>
    </div>

    <div class="column">
      <h2 class="column-heading">Column</h2>
      <div class="cards">
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
      </div>
    </div>

    <div class="column">
      <h2 class="column-heading">Column</h2>
      <div class="cards">
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
      </div>
    </div>

    <div class="column">
      <h2 class="column-heading">Column</h2>
      <div class="cards">
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
        <div class="card">Card</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.column {
  flex-grow: 0;
  flex-shrink: 0;
  width: 300px;

  background-color: #e0e0e0;
  padding: 10px;
}

.column-heading {
  margin: 0;
  margin-bottom: 10px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card {
  background-color: white;
  height: 150px;
  padding: 20px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.card:hover {
  background-color: #dfefff;
}
</style>
