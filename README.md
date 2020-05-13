# Animal Crossing New Horizons Catch Tracker

- Tracks fish and bugs caught, fossils aquired, and flowers grown in Nintendo's newest Animal Crossing game.
- FinkHeavy font provided by Fontsmagazine.com

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
        Bug.js
        Bugs.js
        Fish.js
        Fishies.js
        Flower.js
        Flowers.js
        Fossil.js
        Fossils.js
        Login.js
        Logout.js
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

#
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