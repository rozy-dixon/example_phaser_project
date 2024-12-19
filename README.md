# EXAMPLE PHASER PROJECT

## What goes into setting up the project?

1. run node -v
2. run npm init -y
3. create an assets folder in the root directory
4. create a jsconfig.json file in the root directory
    - with the following information
        - because...
5. create an index.html file in the root directory
    - with the following information
6. create a /src folder in the root directory
7. create a main.js file in the src folder
    - with the following information
    - edit `<title>Document</title>` with your game's name
8. create scenes and prefabs folders in the src folder
9. in scenes/ create a Load.js file
    - with the following information
10. in scenes/ create a Keys.js file
    - with the following information
        - because...
11. install prettier with `npm install --save-dev prettier`
    - create a prettierignore file with the following contents
    - create a .prettierrc file with the following contents
    - add the following to your package.json scripts
12. install husky and with `npm install --save-dev husky lint-staged`
    - add the following to package.json
13. run `npm install --save-dev husky` ([src](https://tighten.com/insights/husky-how-to-automatically-format-lint-and-test-before-you-commit-or-push/#:~:text=Once%20you've%20completed%20your,husky%20folder.))
13. run `npx husky init`
14. run `npm init @eslint/config@latest` and select appropriate options
```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · javascript
✔ Where does your code run? · browser
```
15. create a .gitignore file with the following contents
16. create a repository
17. run github pages
    - go to settings
    - then pages
    - then change branch to main and save
