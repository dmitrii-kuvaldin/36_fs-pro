### deploy приложения на git pages

1. Ставим в зависимости git pages:

```npm i gh-pages```

2. Инициализируем git и размешаем на github.

3. Добавьте в package.json:

```{
  "homepage": ".",
  "scripts": {
  
    "deploy": "npm run build && gh-pages -d build"
  },

}```
