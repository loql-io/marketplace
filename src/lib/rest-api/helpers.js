/*
let hostName = `https://${process.env.NEXT_PUBLIC_SHOP_SUBDOMAIN}.loql.vercel.app`;
if (typeof window !== 'undefined') {
  const l = window.location;
  hostName = `${l.protocol}//${l.host}`;
}
console.log('hostName', hostName);
*/
export const doPost = async (url, options) => {
  try {
    const opts = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      ...options
    };

    if (typeof opts.body !== 'string') {
      opts.body = JSON.stringify(opts.body);
    }

    const response = await fetch(`${url}`, opts);
    return response.json();
  } catch (error) {
    return {
      error
    };
  }
};

export function doGet(url, options) {
  return fetch(`${url}`, options).then((r) => r.json());
}
