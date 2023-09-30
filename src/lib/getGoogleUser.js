async function getGoogleUser(access_token) {
  const url = 'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' + access_token;
  const res = await fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
    return data;
  }).catch((err) => {
    console.log('getGoogleUser', err);
  });
  // console.log('getGoogleUser results:', res);
  return res;
};

export default getGoogleUser;