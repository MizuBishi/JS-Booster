# Type Number

{% method %}
## toFixed()
[](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

{% sample lang="js" %}
Here is how to print a message to `stdout` using JavaScript.

```js
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
```

Expected output: `123.46`

```js
console.log(financial(123.456));
```

Expected output: `0.00`

```js
console.log(financial(0.004));
```

Expected output: `123000.00`

```js
console.log(financial('1.23e+5'));
```

{% endmethod %}
