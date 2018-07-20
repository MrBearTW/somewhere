const BatchRequestError = require('../BatchRequestError');

it('should work', async () => {
  const request = {
    method: 'POST',
    relative_url: 'me/feed',
    body: 'message=Test status update&amp;link=http://developers.facebook.com/',
  };
  const response = {
    code: 403,
    headers: [
      { name: 'WWW-Authenticate', value: 'OAuth…' },
      { name: 'Content-Type', value: 'text/javascript; charset=UTF-8' },
    ],
    body: '{"error":{"type":"OAuthException" }}',
  };
  const error = new BatchRequestError({ request, response });

  expect(error.inspect()).toMatchSnapshot();
});
