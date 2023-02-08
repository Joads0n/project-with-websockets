import { usersCollection } from "./dbConnect.js";

function registryUser({ user, passworld }) {
    return usersCollection.insertOne({ name: user, passworld });
}

export { registryUser };