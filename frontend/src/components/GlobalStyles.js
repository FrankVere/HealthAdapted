import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
    font-family: 'Roboto Flex', sans-serif;
    margin: 0;
    box-sizing: border-box;
}

.homepageText {
  font-family: 'Roboto', sans-serif;
}

.bold {
  font-family: 'IBM Plex Sans', sans-serif;
}

.input {
  margin-left: 10px;
  width: 80px;
  background-color: #f5ce62; 
  border: none; 
  box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
  padding: 2px;
}

//buttons//
.buttonstyle-hover {
  font-family: "Roboto Flex", sans-serif;
  width: 100px;
  height: 20px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 6px;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 30px;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.buttonstyle-hover:hover {
  background-position: 100% 0;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.buttonstyle-hover:focus {
  outline: none;
}

.buttonstyle-hover.click {
  background-image: linear-gradient(
    to right,
    #f5ce62,
    #e43603,
    #fa7199,
    #e85a19
  );
  box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
}

//loading spinner //

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #333 transparent #333 transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

//navbar//

.nav-buttons {
    list-style-type: none;
    background-color: #333;
  }

  .nav-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .nav-list a {
    font-weight: 600;
    display: block;
    color: white;
    text-align: center;
    padding-right: 15px;
    text-decoration: none; 
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: center;
    font-size: 12px;
  }

  .box select {
  background-color: #f5ce62;
  color: white;
  padding: 3px;
  border: none;
  font-size: 15px;

  box-shadow: 0 5px 10px rgba(236, 76, 76, 1);
  -webkit-appearance: button;
  appearance: button;
  outline: none; 
  }

.box:hover::before {
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.2);
}


`;
