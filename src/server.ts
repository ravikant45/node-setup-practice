import { app } from './app';
import config from './config/config';

const server = app.listen(config.PORT);

(() => {
    try {
        // eslint-disable-next-line no-console
        console.log(`Server is running on port ${config.PORT}`);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        server.close((error) => {
            if (error) {
                // eslint-disable-next-line no-console
                console.log('Error in server shutdown', error);
            }
            process.exit(1);
        });
    }
})();
