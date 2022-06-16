import {$authHost, $host} from "./index";


export const fetchQuestions = async (testId) => {
    const {data} = await $authHost.get('api/tests/questions', {params:{testId}})
    return data
}
export const fetchAnswers = async (questionId) => {
    const {data} = await $authHost.get('api/tests/answers', {params:{questionId}})
    return data
}

export const fetchTests = async () => {
    const {data} = await $host.get('api/tests')
    return data
}

export const fetchTest= async (id) => {
    const {data} = await $host.get('api/tests', {params:{id}})
    return data
}
//дописать
export const updateStats= async (testId, userId, mark) => {
    const {data} = await $authHost.post('api/tests/'+testId, {userId, mark})
    return data
}