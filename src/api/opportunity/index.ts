import { Server } from '@hapi/hapi';
import { initRoutes } from './opportunity-routes';

export const init = (server: Server)=>{
    initRoutes(server);
}