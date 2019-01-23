import app from "./app";
import logger from "./utils/logger";

const server = app.listen(8080, () => {
    logger.info(`server start on port ${app.get("port")} in ${app.get("env")} mode`);
});
