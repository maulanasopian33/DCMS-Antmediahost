
export default function ({ next, router }) {
    const token = localStorage.getItem('pro_user_id')
    if(!token || expire(token)){
        router.push('/login')
    }
    return next();
  }

function expire(token) {
    const payload = JSON.parse(token);
    const expiryTimeMs = payload.expire;
    const currentTimeMs = Date.now();
    return currentTimeMs >= expiryTimeMs;
}

  