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
7-1 pattern: 7 folders, 1 file.
link1: https://sass-guidelin.es/#the-7-1-pattern
link2: https://gist.github.com/rveitch/84cea9650092119527bc

```
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file
```

## Styled Components
- Local
```js
const PhoneDiv = styled.div`
  position: relative;
`;

<PhoneDiv>
```

- Global
a bit more complicated
