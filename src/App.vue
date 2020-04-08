<template>
  <div id="app">
    <div class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <a class="navbar-brand" href="/home"><router-link to="/">VueCrud</router-link></a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" id="cs">
            <li class="nav-item">
              <a class="nav-link"><router-link to="/home">Home</router-link><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/Listuser">Funcionario</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/about">About</router-link></a>
            </li>
          </ul>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav a {
  font-weight: bold;
  color:white;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2em;
  text-align: center;
  height: 100%;
  width: 15%;
  text-align: center;
  

}


#cs a.router-link-exact-active {
  color: rgb(44, 161, 197);
}
</style>
