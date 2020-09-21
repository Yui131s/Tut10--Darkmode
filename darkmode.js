function changeMode() {
    const screen = document.querySelectorAll(".screen");
    const button = document.querySelectorAll(".mode-button");
    const header = document.querySelectorAll(".header");
    const wrapper = document.querySelectorAll(".wrapper");
    const content = document.querySelectorAll(".content");
    const sidebar = document.querySelectorAll(".sidebar");
    const cards = document.querySelectorAll(".cards");
    const card = document.querySelectorAll(".card");
    const table = document.querySelectorAll(".ctable");
    const main = document.querySelectorAll(".main-page");
    const secondary = document.querySelectorAll(".secondary-page");
    const section = document.querySelectorAll(".section");
  
    if (
      document.getElementById("wrapper").getAttribute("class") === "wrapper light"
    ) {
      makeDark(screen);
      makeDark(wrapper);
      makeDark(content);
      makeDark(header);
      makeDark(button);
      makeDark(sidebar);
      makeDark(cards);
      makeDark(card);
      makeDark(table);
      makeDark(main);
      makeDark(secondary);
      makeDark(section);

    } else {
      makeLight(screen);
      makeLight(wrapper);
      makeLight(content);
      makeLight(header);
      makeLight(button);
      makeLight(sidebar);
      makeLight(cards);
      makeLight(card);
      makeLight(table);
      makeLight(main);
      makeLight(secondary);
      makeLight(section);
    }
  }
  
  function makeDark(element) {
    element.forEach(function(el) {
      el.classList.remove("light");
      el.classList.add("dark");
    });
  }
  
  function makeLight(element) {
    element.forEach(function(el) {
      el.classList.remove("dark");
      el.classList.add("light");
    });
  }
  