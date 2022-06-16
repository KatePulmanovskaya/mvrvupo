import {$authHost, $host} from "./index";


export const fetchStatistics = async (userId) => {
    const {data} = await $authHost.get('api/statistics',  {params:{userId}})
    return data
}