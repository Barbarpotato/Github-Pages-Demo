# Configure the vite.config.js
First you need to configure the vite.config.js file. for the example: 
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Form-Demo'
})
```
in base property value, you need to add the react directory project using string value.

# Configure Github script
inside the project directory create `.github` folder and inside of it crate new folder named `workflows` then create file inside of it named `deploy.yml`
copy and paste the script below inside of `deploy.yml` file:
```
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 16

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v2
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v2
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
After that you can push your project to github and let github take actions by deploying your new branch named `gh-pages`

# Set up the Github Pages
now you can go to Settings -> Pages -> find branch -> change to gh-pages branch -> save

# Enjoyed your github pages
just wait github taking action by deploying your project to github pages by seeing it from actions site from github
you can also see you page site from Settings -> Pages -> Visit Site

# Add react router dom to github pages
you need to install react-router-dom to your package then use it as usual in your react project. once you built it there are some several configuration you need to create:
you need to crate new file named 404.html in your public folder and write code like this:
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>React Router</title>
    <script type="text/javascript">
        var pathSegmentsToKeep = 1;

        var l = window.location;
        l.replace(
            l.protocol +
            "//" +
            l.hostname +
            (l.port ? ":" + l.port : "") +
            l.pathname
                .split("/")
                .slice(0, 1 + pathSegmentsToKeep)
                .join("/") +
            "/?/" +
            l.pathname.slice(1).split("/").slice(pathSegmentsToKeep).join("/").replace(/&/g, "~and~") +
            (l.search ? "&" + l.search.slice(1).replace(/&/g, "~and~") : "") +
            l.hash
        );
    </script>
</head>

<body></body>

</html>
```

After that you need to add the script tag inside your `index.html file`:
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite + React</title>
  <script type="text/javascript">
    (function (l) {
      if (l.search[1] === "/") {
        var decoded = l.search
          .slice(1)
          .split("&")
          .map(function (s) {
            return s.replace(/~and~/g, "&");
          })
          .join("?");
        window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
      }
    })(window.location);
  </script>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

once that you can push your project to github and let github pages take some actions to deploy your project.
