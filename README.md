# cryptoWriter.js
<p align="center">
<img src="https://img.shields.io/github/stars/keshav-bajaj/cryptoWriter.js" />
    <a href="https://github.com/keshav-bajaj/cryptoWriter/releases"><img src="https://img.shields.io/github/release/keshav-bajaj/cryptoWriter.js.svg?style=flat-square&maxAge=600" alt="Downloads"></a>
    <img src="
https://img.shields.io/github/license/keshav-bajaj/cryptoWriter.js" />
<img src="https://img.shields.io/badge/Size(Minified)-~3KB-blue" />
</p>
A lightweight javascript library which creates brilliant text animation by rendering strings of random characters before the actual text.

<img src="./assets/crypto.gif" />

## `1.Usage`

Load cryptoWriter.js and configure.
**index.html**

```html
<div id="container">
  <div id="myElement">Some Text</div>
</div>

<script src="cryptoWriter.js"></script>
```

**app.js**

```javascript
new cryptoWriter(document.querySelector("#myElement"));
```
`That's it! 
You are now running cryptoWriter.js!`

**`The library uses ".innerText" property so be sure to select the element which immediately contains the text and not its parent container.`**

## `2.Options `
### `Defaults`
```javascript
new cryptoWriter({
  randomRounds:5,
  completionTime:"auto",
  onVisible:true,
  delayTime:0.05,
  untilDelay:"random",
  enabledSets:["letters","lettersCaps","numbers"],
  allAtOnce:false
});
```

### `2.1 randomRounds`
- `Type:Number`
- `Determines the number of random strings of characters displayed before the actual text.`

### ` 2.2 completionTime`
- `Type:Number/String`
- `Time taken for rendering to complete in seconds`.
- **`Its default value is set to "auto", which calculates completion time at 5 characters/second.`**
- **`If you want to set the speed in terms of chars/second, simply put the value as follows replacing "6" with your desired number.`**
```javascript
 new  cryptoWriter({
   completionTime:"6chars"  
 });
```
### `2.3 delayTime`
- `Type:Number`
- `Time delayed in rendering in seconds.`
### `2.4 onVisible`
- `Type:Boolean`
- `Set true if you want the rendering to start once the element is in viewport`

###  `2.5 untilDelay`
- `Type:String`
- `Determines what to do until rendering begins.`

| `Value`  | `What it does`                                     |
| -------- | -------------------------------------------------- |
| `random` | `Displays a random string until rendering begins.` |
| `same`   | `Displays the actual text until rendering begins.` |
| `empty`  | `Displays nothing until rendering begins.`         |
**`To display text of your choice simply put that text instead of the above values`**
### `2.6 enabledSets`
- `Type:Array`
-  `Choose the source of random characters.`

**`To disable all sets leave the array empty.`**
**`To enable all sets, set the value to 'all'.`**

#### `Inbuilt Sets`

| `Name`         | `Characters`                         |
| -------------- | ------------------------------------ |
| `letters`      | `abcdefghijklmnopqrstuvwxyz`         |
| `lettersCaps`  | `ABCDEFGHIJKLMNOPQRSTUVWXYZ`         |
| `numbers`      | `0123456789`                         |
| `specialChars` | ``!@#$%^&*()-=[]\;`',./~_+{}:"<>?|`` |
---
### `2.7 customSet`
- `Type:Array`

- `Create and use a custom set of characters by using this option.`

- `Example:`

  ```javascript
  new cryptoWriter(document.queryselector("#myElement"),{
  customSet:["$","@","%","5","9","3","a","j"]
  });
  ```

### `Using emojis as custom set`
```javascript
var emojis = "😀😃😄😁😆😅😂🤣🥲😊😇🙂🙃😉😌";
emojis = Array.from(emojis);
new cryptoWriter(document.queryselector("#myElement"),{
customSet:emojis
});
```
### `2.8 allAtOnce`
- `Type:Boolean`
- `Controls if text appears one character at a time or all together.`
- `Set this to true if you want all the text to appear at once. `
----
## `3. Using with jQuery`
```javascript
var myElement = $("#myElement").get(0);
new cryptoWriter(myElement);
```

----

## `4. cryptoWriter.js Generator`

`If you want to play around with the options or want to generate cryptoWriter code for yourself, head over to the `<a href="https://keshav-bajaj.github.io/cryptoWriter/index.html#configure-h3">`Generator.`</a>

---

<h1 style="text-align:center;">Enjoy :)</h1>
