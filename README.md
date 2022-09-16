## Create a React Native project with Expo

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

## Run the project

```bash
$ cd DoorFrontApp
$ npm start
```