const TOKEN_NAME = 'wtw-token';

export function getToken(){
  const token = localStorage.getItem(TOKEN_NAME);
  return token ?? '';
}

export function saveToken(token: string){
  localStorage.setItem(TOKEN_NAME, token);
}

export function deleteToken(){
  localStorage.removeItem(TOKEN_NAME);
}
