import {$authHost, $host} from "./index";


export const fetchTheory= async (module) => {
    const {data} = await $host.get('api/theory', {params:{module}})
    return data
}

export const fetchPractice = async () => {
    const {data} = await $host.get('api/practice')
    return data
}
