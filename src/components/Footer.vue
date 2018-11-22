<template>
  <footer>
    <div id="footerText">
      <ul>
        <li><p><b>Contact RideshareDevs@gmail.com for assistance</b></p></li>
        <li><p><b>Rideshare 2018 &copy; All rights reserved</b></p></li>
        <li><p><b>Last updated: November 11th, 2018</b></p></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
  #footerText {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 10px;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: slategrey;
  }

  li {
    float: left;
    width: 33%;
  }

  li p {
    display: block;
    text-align: center;
    padding: 0px 5px;
    text-decoration: none;
  }
</style>