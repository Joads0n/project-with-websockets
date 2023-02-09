import createSaltAndHashPassworld from "../utils/createSaltAndHashPassworld.js";
import { usersCollection } from "./dbConnect.js";

function findUser(name) {
    return usersCollection.findOne({ name });
}

function registryUser({ user, passworld }) {
    const { hashPassworld, saltPassworld } = createSaltAndHashPassworld(passworld);
    return usersCollection.insertOne({ name: user, hashPassworld, saltPassworld });
}

export { registryUser, findUser };