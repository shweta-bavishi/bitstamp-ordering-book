export const subscribeMsg = conversionValue => ({
  event: 'bts:subscribe',
  data: {channel: `order_book_${conversionValue}`},
});

export const WEBSOCKET_URL = 'wss://ws.bitstamp.net';
