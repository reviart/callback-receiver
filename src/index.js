const { Hono } = require('hono');

const Helper = require('./helpers');

const app = new Hono();

app.get('/callback-receiver', async (c) => {
  await Helper.printCallbackInformation(c);
  return c.json(true);
});

app.get('/callback-receiver-broken', async (c) => {
  await Helper.printCallbackInformation(c);
});

app.post('/callback-receiver', async (c) => {
  await Helper.printCallbackInformation(c);
  return c.json(true);
});

app.post('/callback-receiver-broken', async (c) => {
  await Helper.printCallbackInformation(c);
});

export default app;
