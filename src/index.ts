import { createConnectionToDB } from "./connection";
import { initServer } from "./server";

const main = async () => {
    await createConnectionToDB();

    await initServer();
};
main();