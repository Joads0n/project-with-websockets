import { randomBytes, scryptSync } from 'crypto';

function createSaltAndHashPassworld(passworld) {
    const saltPassworld = randomBytes(16).toString("hex");
    const hashPassworld = scryptSync(passworld, saltPassworld, 64).toString("hex");

    return { saltPassworld, hashPassworld }
}

export default createSaltAndHashPassworld;