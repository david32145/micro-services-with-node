import { ServiceBroker } from 'moleculer'
import ApiService from 'moleculer-web'

import PostService from './services/post.services'

const brokerGateway = new ServiceBroker({
    nodeID: 'broker-1',
    transporter: 'TCP',
})

brokerGateway.createService({
    name: 'gateway',
    mixins: [ApiService],
    settings: {
        routes: [{
            aliases: {
                'GET /post': 'post.index',
                'GET /post/:post_id': 'post.show',
                'POST /post': 'post.store',
                'PUT /post/:post_id': 'post.update',
                'DELETE /post/:post_id': 'post.destroy'
            }
        }]
    }
})

const brokerServices = new ServiceBroker({
    nodeID: 'broker-2',
    transporter: 'TCP',
})

brokerServices.createService(PostService)


Promise.all([brokerGateway.start(), brokerServices.start()])