<template>
  <footer>
    <div id="footerText">
      <ul>
        <li onmouseover="showContact()" onmouseout="hideContact()"><p id="contact"><b>Contact</b></p></li>
        <li><p><b>Rideshare 2018 (C) All rights reserved</b></p></li>
        <li><p><b>Last updated: November 11th, 2018</b></p></li>
      </ul>
    </div>
  </footer>
</template>

<script>
    function showContact() {
        document.getElementById("contact").innerHTML = "<b>RideShareDevs@gmail.com</b>";
    }

    function hideContact() {
        document.getElementById("contact").innerHTML = "<b>Contact</b>";
    }
</script>

<style scoped>
  #footerText {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
  }

  li {
    float: left;
    width: 33%;
  }

  li p {
    display: block;
    text-align: center;
    padding: 5px 5px;
    text-decoration: none;
  }
</style>