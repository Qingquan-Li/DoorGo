# How to run this project

### 1. Download the code

Download and then open the code on an IDE (e.g., VSCode).

### 2. Install dependencies
On the terminal, in the project root directory,
run `npm install` or `npx expo install`
to install dependencies.

Note: The `npx expo install` command will pick a version of the library that is compatible with your project and then use your JavaScript package manager (such as npm) to install it.

### 3. Run the project
On the terminal, in the project root directory, run:
```bash
expo start
```
or:
```bash
npm start
```


# Create a new React Native project with Expo

1. Install Node.js

   https://nodejs.org/en/

2. Install expo-cli globally

   ```bash
   $ npm install expo-cli --global
   ```

3. Initialize a expo project

   ```bash
   $ npx create-expo-app --template
   ? Choose a template: › - Use arrow-keys. Return to submit.
       Blank
   ❯   Blank (TypeScript) - blank app with TypeScript enabled
       Navigation (TypeScript)
       Blank (Bare)
   ```

Install and update packages that work with the version of react-native in your project:

```bash
$ npx expo install package-name
```
