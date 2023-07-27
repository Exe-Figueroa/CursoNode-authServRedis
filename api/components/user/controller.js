const nanoid = require('nanoid');
const auth = require('../auth/index.js')
const TABLA = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function upsert(body) {
        const user = {
            name: body.name,
            username: body.username,
        }
        
        if (body.id) {
            user.id = body.id;
            if (body.password || body.username) {
                await auth.update({
                    id: user.id,
                    username: user.username,
                    password: body.password,
                })
            }
            return store.update(TABLA, user);
        } else {
            user.id = nanoid();
            if (body.password || body.username) {
                await auth.insert({
                    id: user.id,
                    username: user.username,
                    password: body.password,
                })
            }
            return store.insert(TABLA, user);
        }
    }

    function follow(from, to) {
        return store.insert(`${TABLA}_follow`,{
            user_from: from,
            user_to: to
        });
    }

    async function following(user) {
        const join = {};
        join[TABLA] = 'user_to';
        const query = {user_from: user};

        return await store.query(`${TABLA}_follow`, query, join);
    }
    
    return {
        list,
        get,
        upsert,
        follow,
        following,
    };
}