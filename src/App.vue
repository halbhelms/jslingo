<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&display=swap');


.pre {
  font-family: 'Fira Code';
  /* background-color: rgb(241,243,244); */
  color: maroon;
  line-height: 2rem;
  font-size: 1.3rem;
  margin-bottom: 12px;
  text-align: left;
  /* margin-left: 20px; */
}

em {
  font-style: italic;
  font-weight: 600;
}

.given {
  font-size: 1.4rem;
  text-align: left;
  margin-left: 20px;
}

.if-given {
  font-size: 1.5rem;
  font-style: italic;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

pre {
  display: inline-block;
  color: maroon;
  font-weight: 600;
  font-family: 'Fira Code';
  font-size: 80%;
}

.body {
  text-align: left;
  margin-left: 60px;
}

.explanation {
  text-align: left;
  margin-top: 20px;
  font-size: 1.2rem;
  line-height: 1rem;
}

.question {
  font-size: 1.3rem;
}

.result {
  font-size: 1.5rem;
  margin-top: 20px;
}
</style>
