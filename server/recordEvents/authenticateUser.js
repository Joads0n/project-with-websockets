import { scryptSync, timingSafeEqual } from "crypto";
function authenticateUser(passworld, user) {
    const hashTest = scryptSync(passworld, user.saltPassworld, 64);

    const hash = Buffer.from(user.hashPassworld, "hex");

    const authenticated = timingSafeEqual(hashTest, hash);

    return authenticated;
}

export default authenticateUser;