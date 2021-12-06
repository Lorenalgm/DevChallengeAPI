const routeNotFoundMiddleware = require('../../../src/middlewares/routeNotFound');

describe('Testing route not found middleware', () => {
  it('calls `next` with the correct parameters', () => {
    const params = {
      req: {
        method: 'GET',
        path: '/path'
      },
      next: jest.fn()
    };

    routeNotFoundMiddleware(params.req, {}, params.next);

    const expected = {
      status: 404,
      message: 'Not found.',
      error: 'Resource not found.',
      details: {
        path: expect.any(String)
      }
    };

    expect(params.next).toHaveBeenCalledWith(expected);
  });
});
