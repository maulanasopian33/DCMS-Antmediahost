

import axios from 'axios';

export async function apiget(url,auth,inthis) {
    try {
        let header = {
            headers: {
            'Authorization': `Bearer ${auth}` 
            }
        }
        const response = await axios.get(import.meta.env.VITE_APIBASE + url, header);
        return response.data;
    } catch (error) {
        inthis.$notify({
            title: 'Error '+error.response.status,
            text: error.response.data.message,
            type: 'error',
            duration: 5000, // Durasi notifikasi dalam milidetik
        });
        return error.response;
    }
}
export async function apiput(url,auth,data,inthis) {
    try {
        let header = {
            headers: {
            'Authorization': `Bearer ${auth}` 
            }
        }
        let a = data;
        const response = await axios.put(import.meta.env.VITE_APIBASE + url,data, header);
        return response.data;
    } catch (error) {
        inthis.$notify({
            title: 'Error '+error.response.status,
            text: error.response.data.message,
            type: 'error',
            duration: 5000, // Durasi notifikasi dalam milidetik
        });
        return error.response;
    }
}
export async function apipost(url,auth,data,inthis) {
    try {
        let header = {
            headers: {
            'Authorization': `Bearer ${auth}` 
            }
        }
        let a = data;
        const response = await axios.post(import.meta.env.VITE_APIBASE + url,data, header);
        return response.data;
    } catch (error) {
        inthis.$notify({
            title: 'Error '+error.response.status,
            text: error.response.data.message,
            type: 'error',
            duration: 5000, // Durasi notifikasi dalam milidetik
        });
        return error.response;
    }
}