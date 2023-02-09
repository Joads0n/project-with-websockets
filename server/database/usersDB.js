import { usersCollection } from "./dbConnect.js";

function findUser(name) {
    return usersCollection.findOne({ name });
}

function registryUser({ user, passworld }) {
    return usersCollection.insertOne({ name: user, passworld });
}

export { registryUser, findUser };