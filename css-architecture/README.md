## CSS Architecture in React
- Scalable styling solution
- Three main ways of styling React apps
1) CSS Modules
2) Styled Components ( emotional )
3) Utility / Component tools ( Material UI, Tailwind etc. )

- Local vs Global styles

- CSS Modules
Local:
```css
.checkoutIcon {
  width: 2rem;
  height: 2rem;
}
````

```html
<img className={styles.checkoutIcon}>
```

Global:
```css
textarea {
  font: bold 1rem "Arial";
}
```

```html
<textarea
  value={info || undefined}
  id="info"
>
```

Where to store global styles
- 7-1 pattern
link1: https://sass-guidelin.es/#the-7-1-pattern
link2: https://gist.github.com/rveitch/84cea9650092119527bc

