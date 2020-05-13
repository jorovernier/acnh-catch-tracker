module.exports = {
    getFish: async (req, res, next) => {
        const db = await req.app.get('db');
        const {user_id} = req.session.user;
        db.get_fish(user_id).then(fish => {
            res.status(200).send(fish)
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    getBugs: async (req, res, next) => {
        const db = await req.app.get('db');
        const {user_id} = req.session.user;
        db.get_bugs(user_id).then(bugs => {
            res.status(200).send(bugs)
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    getFlowers: async (req, res, next) => {
        const db = await req.app.get('db');
        const {user_id} = req.session.user;
        db.get_flowers(user_id).then(flower => {
            res.status(200).send(flower)
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    getFossils: async (req, res, next) => {
        const db = await req.app.get('db');
        const {user_id} = req.session.user;
        db.get_fossils(user_id).then(fossil => {
            res.status(200).send(fossil)
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    updateFish: (req, res, next) => {
        const db = req.app.get('db');
        const {caught, slot} = req.body;
        const {user_id} = req.session.user;
        db.update_fish(caught, user_id, slot).then(boolean => {
            res.status(200).send(boolean);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    updateBugs: (req, res, next) => {
        const db = req.app.get('db');
        const {caught, slot} = req.body;
        const {user_id} = req.session.user;
        db.update_bugs(caught, user_id, slot).then(boolean => {
            res.status(200).send(boolean);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    updateFlowers: (req, res, next) => {
        const db = req.app.get('db');
        const {grown, slot} = req.body;
        const {user_id} = req.session.user;
        db.update_flowers(grown, user_id, slot).then(amount => {
            res.status(200).send(amount);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    updateFossils: (req, res, next) => {
        const db = req.app.get('db');
        const {aquired, slot} = req.body;
        const {user_id} = req.session.user;
        db.update_fossils(aquired, user_id, slot).then(boolean => {
            res.status(200).send(boolean);
        }).catch(err => {res.status(500).send(console.log(err))})
    }
}