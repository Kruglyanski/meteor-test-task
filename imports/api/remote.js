import ws from 'isomorphic-ws'
import SimpleDDP from 'simpleddp'
import {simpleDDPLogin} from 'simpleddp-plugin-login'
import {ENDPOINT} from '../../config/config'

let opts = {
    endpoint: ENDPOINT,
    SocketConstructor: ws,
    reconnectInterval: 5000
};


export const remote = new SimpleDDP(opts, [simpleDDPLogin])
