# Animal Crossing New Horizons Catch Tracker

[![site status](https://img.shields.io/website?down_color=%23b93724&down_message=offline&up_color=%23418f60&up_message=online&url=https%3A%2F%2Fcatchtracker.xyz)](https://img.shields.io/website?down_color=%23b93724&down_message=offline&up_color=%23418f60&up_message=online&url=https%3A%2F%2Fcatchtracker.xyz)
[![repo size](https://img.shields.io/github/repo-size/jorovernier/acnh-catch-tracker?color=red)](https://img.shields.io/github/repo-size/jorovernier/acnh-catch-tracker?color=red)
[![react version](https://img.shields.io/badge/dynamic/json?color=%2361dafb&label=react&query=%24.dependencies.react&url=https%3A%2F%2Fraw.githubusercontent.com%2Fjorovernier%2Facnh-catch-tracker%2Fmaster%2Fpackage.json)](https://img.shields.io/badge/dynamic/json?color=%2361dafb&label=react&query=%24.dependencies.react&url=https%3A%2F%2Fraw.githubusercontent.com%2Fjorovernier%2Facnh-catch-tracker%2Fmaster%2Fpackage.json)

## Front End

**Dependencies**
- axios
- redux
- react-redux
- react-router-dom
- http-proxy-middleware
- redux-promise-middleware
- node-sass

**File Structure**
- src/
    - Components/   
        - Bug.js  
        - Bugs.js     
        - Fish.js     
        - Fishies.js  
        - Flower.js   
        - Flowers.js  
        - Fossil.js   
        - Fossils.js  
        - Login.js        
        - Logout.js
    - Fonts/
        - FinkHeavy.ttf
    - redux/
        - reducer.js
        - store.js
    - SASS/
        - App.scss
        - Bugs.scss
        - Fishies.scss
        - Flowers.scss
        - Fossils.scss
        - Login.scss
    - App.js
    - App.test.js
    - index.css => reset.css
    - index.js
    - serviceWorker.js
    - setupProxy.js
    - setupTests.js

**Routes**
- Fish => '/fish' => Fishies.js
- Bugs => '/bugs' => Bugs.js
- Flowers => '/flowers' => Flowers.js
- Fossils => '/fossils' => Fossils.js


## Back-End

**Dependencies**
- express
- massive
- dotenv
- express-session
- bcrypt

**Server File Structure**
- db/
    - create_user.sql
    - find_user.sql
    - get_bugs.sql
    - get_fish.sql
    - get_flowers.sql
    - get_fossils.sql
    - init.sql
    - update_bugs.sql
    - update_fish.sql
    - update_flowers.sql
    - update_fossils.sql
- server/
    - Controllers/
        - authenticator.js
        - items.js
    index.js

**Endpoints**
- Authentication
    - register => post => '/auth/register'
    - login => post => '/auth/login'
    - logout => delete => '/auth/logout'
    - userSession => '/auth/user_session'

- Retrieve Data
    - getFish => get => '/api/get_fish'
    - getBugs => get => '/api/get_bugs'
    - getFlowers => get => '/ai/get_flowers'
    - getFossils => get => '/api/get_fossils'

- Update Data
    - updateFish => put => '/api/update_fish'
    - updateBugs => put => '/api/update_bugs'
    - updateFlowers => put => '/ai/update_flowers'
    - updateFossils => put => '/api/update_fossils'


# Attribution

FinkHeavy font provided by Fontsmagazine.com