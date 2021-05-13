/*
 * cryptoWriter.js
 * Author: Keshav Bajaj - @keshav-bajaj, keshav-bajaj.github.io
 * Description: Renders text in a brilliant style by displaying strings of random characters before the actual text.
 * How to use? Read the docs - https://github.com/keshav-bajaj/cryptoWriter/blob/main/README.md
 * License: MIT
 * Version: 1.0
 */
class cryptoWriter {
  constructor(el, options) {
    if (el == null) {
      console.error("An element is required to execute cryptoWriter.js !");
      return false;
    }
    // Defaults
    const defaults = {
      randomRounds: 5,
      enabledSets: ["letters", "numbers", "lettersCaps"],
      onVisible: true,
      delayTime: 0.05,
      untilDelay: "random",
      completionTime: "auto",
      allAtOnce: false,
    };
    // Check if options are there.
    if (options == null) {
      options = "l";
    }
    // Inbuilt Sets
    const letters = "qwertyuiopasdfghjklzxcvbnm";
    const lettersCaps = letters.toUpperCase();
    const numbers = "1234567890";
    const specialChars = "`!@#$%^&*()-=[]\\;',./~_+{}|:\"<>?";
    // Declared array chars.
    var chars = [];
    // Check for customSet and add to chars if available.
    if (options.hasOwnProperty("customSet")) {
      var customset = options.customSet;
      if (Array.isArray(customset)) {
        var i = 0;
        for (i = 0; i < customset.length; i++) {
          chars.push(customset[i]);
        }
      } else {
        console.error("'" + customset + "' customSet is not an array!");
      }
    }
    // Check for enabledSets and add the respective sets to chars.
    var i = 0;
    const setsString = ["letters", "numbers", "specialChars", "lettersCaps"];
    var enabledset = options.enabledSets || defaults.enabledSets;
    const sets = [letters, numbers, specialChars, lettersCaps];
    if (enabledset == "all") {
      for (i = 0; i < sets.length; i++) {
        pushchars(chars, sets[i]);
      }
    } else {
      for (i = 0; i < enabledset.length; i++) {
        if (setsString.indexOf(enabledset[i]) == -1) {
          console.error(enabledset[i] + " is not a valid set.");
        }
      }
      for (i = 0; i < sets.length; i++) {
        if (enabledset.indexOf(setsString[i]) != -1) {
          pushchars(chars, sets[i]);
        }
      }
    }
    if (chars.length <= 0) {
      console.error("You must select some inbuilt sets or add a customSet");
      return false;
    }
    // Declare and check the value of allAtOnce.
    var appearTogether;
    if (options.allAtOnce == null || options.allAtOnce == undefined) {
      appearTogether = defaults.allAtOnce;
    }
    if (typeof options.allAtOnce != "boolean") {
      if (options.allAtOnce == "true") {
        appearTogether = true;
      } else if (options.allAtOnce == "false") {
        appearTogether = false;
      } else {
        appearTogether = defaults.allAtOnce;
      }
    } else {
      var appearTogether = options.allAtOnce;
    }
    // Declare various variables that will be required to configure the rendering.
    var delay = options.delayTime || defaults.delayTime;
    var rounds = options.randomRounds || defaults.randomRounds;
    rounds = parseInt(rounds);
    var time = options.completionTime || defaults.completionTime;
    var nativeText = el.innerText;
    var nativeTextArray = Array.from(nativeText);
    i = 0;
    var index = nativeTextArray.length;
    var something = "";
    var indexReverse = 0;
    // Check if time is declared in terms of chars/second or is set to auto.
    var res = time.toString().substring(time.length - 5, time.length);
    if (res == "chars") {
      time = time.substring(0, time.length - 5);
      time = index / time;
    }
    if (time == "auto") {
      time = index / 5;
    }
    // Check if time, rounds and delay are numerical values;
    if (isNaN(delay) || isNaN(rounds) || isNaN(time)) {
      if (isNaN(delay)) {
        console.error("'" + delay + "' is not a number.");
      }
      if (isNaN(rounds)) {
        console.error("'" + rounds + "' is not a number.");
      }
      if (isNaN(time)) {
        console.error("'" + time + "' is not a number.");
      }
      return false;
    }
    // Check the value of untilDelay and execute code accordingly.
    switch (options.untilDelay || defaults.untilDelay) {
      case "empty":
        el.innerText = "";
        break;
      case "random":
        el.innerText = newstring(index, chars);
        break;
      case "same":
        el.innerText = nativeText;
        break;
      default:
        el.innerText = options.untilDelay;
        break;
    }
    // Check if rendering has to begin once the element is in viewport.
    var onVisible;
    if (options.onVisible == null || options.onVisible == undefined) {
      onVisible = defaults.onVisible;
    }
    if (typeof options.onVisible != "boolean") {
      if (options.onVisible == "true") {
        onVisible = true;
      } else if (options.onVisible == "false") {
        onVisible = false;
      } else {
        onVisible = defaults.onVisible;
      }
    } else {
      var onVisible = options.onVisible;
    }
    // Begin the rendering.
    // If onvisible is true, an interval begins which stops only when element is in viewport and initiates rendering.
    if (onVisible) {
      var newInterval = setInterval(() => {
        if (isInViewport(el)) {
          clearInterval(newInterval);
          // A setTimeout is used to generate a delay.
          setTimeout(() => {
            // Interval begins.
            var Interval = setInterval(() => {
              if (i < nativeTextArray.length * rounds) {
                // It starts with generating random strings;
                el.innerHTML = something + newstring(index, chars);
                i++;
                if (i % rounds == 0) {
                  /* When a specific number of rounds has taken place,
                    one char of actual text is generated and the length of random string is reduced by one char. */
                  if (appearTogether != true) {
                    something += nativeTextArray[indexReverse];
                    index--;
                    indexReverse++;
                  }
                }
              } else {
                // Once rounds are complete interval is closed, actual text is put into the element just to be sure.
                clearInterval(Interval);
                el.innerHTML = nativeText;
              }
            }, (time * 1000) / (nativeTextArray.length * rounds));
          }, delay * 1000);
        }
      }, 1);
    } else {
      // If onVisible is false, then the rendering begins as usual.
      setTimeout(() => {
        var Interval = setInterval(() => {
          if (i < nativeTextArray.length * rounds) {
            el.innerHTML = something + newstring(index, chars);
            i++;
            if (i % rounds == 0) {
              if (appearTogether != true) {
                something += nativeTextArray[indexReverse];
                index--;
                indexReverse++;
              }
            }
          } else {
            clearInterval(Interval);
            el.innerHTML = nativeText;
          }
        }, (time * 1000) / (nativeTextArray.length * rounds));
      }, delay * 1000);
    }
    // Function which generates random strings with a given set of characters.
    function newstring(num, chars) {
      var i = 0;
      var name = "";
      for (i = 0; i < num; i++) {
        name += chars[Math.floor(Math.random() * chars.length)];
      }
      return name;
    }
    // Function which pushes characters from a string to an array.
    function pushchars(array, string) {
      var stringArray = Array.from(string);
      var integer = 0;
      for (integer = 0; integer < stringArray.length; integer++) {
        array.push(stringArray[integer]);
      }
    }
    // Function which checks if the element is in viewport.
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }
}
