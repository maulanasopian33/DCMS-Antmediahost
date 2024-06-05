import axios from "axios";

export default function ({
    next,
    router
}) {
    // const token = localStorage.getItem('pro_token') 
    const payload = JSON.parse(localStorage.getItem('pro_user_id'));
    if (!payload) {
        return router.push('/login')
    }
    axios.get(
        import.meta.env.VITE_APIBASE + 'product?limit=all&id=' + payload['value']).then(({
        data
    }) => {
        let datas = data.data;
        if (datas.length == 0) {
            localStorage.removeItem("pro_token");
            localStorage.removeItem("pro_user_id");
            localStorage.removeItem("pro_username");
            localStorage.removeItem("pro_userId");
            alert('anda tidak memiliki produk colocation')
            return router.push('/login')
        }

        return next();
    })
}