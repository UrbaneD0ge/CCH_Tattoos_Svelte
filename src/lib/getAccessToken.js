import { client_id, client_secret } from '$env/static/private';

const port = process.env.PORT || 5173;

async function getAccessToken(code) {
  const url = 'https://oauth2.googleapis.com/token';
  const params = {
    client_id: client_id,
    client_secret: client_secret,
    redirect_uri: `http://localhost:${port}/login/google/callback`,
    grant_type: 'authorization_code',
    code: code
  };
  const body = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: body
  }).then((response) => {
    // console.log(response)
    return response.json();
  }).then((data) => {
    return data;
  });
  // console.log(body);
  // console.log('getAccessTokenResults', JSON.stringify(res));
  return res.access_token;
};



export default getAccessToken;