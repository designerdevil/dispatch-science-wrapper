const Resource = require('../modules/Resource');

module.exports = function Orders(api) {
  const resource = new Resource(api);
  resource.endpoints({
    create: {
      path: '/orders',
      method: 'POST',
    },
    fetch: {
      path: '/orders/:orderId',
      method: 'GET',
    },
    delete: {
      path: '/orders/:orderId',
      method: 'DELETE',
    },
    update: {
      path: '/orders/:orderId',
      method: 'PATCH',
    },
    status: {
      path: '/orders/:orderId/status',
      method: 'GET',
    },
    hold: {
      path: '/orders/:orderId/hold',
      method: 'POST',
    },
    charges: {
      path: '/orders/:orderId/charges',
      method: 'POST',
    }
  });
  return resource;
};
