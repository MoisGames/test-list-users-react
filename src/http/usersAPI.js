import { $host } from ".";

export const fetchUsers = async () => {
    const {data} = await $host.get('/users')
    return data;
}