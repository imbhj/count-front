import { getCount } from "../../api/counter"

export const getHistory = (result) => {
    return result.map((value) => ({
        id: value.id,
        createdAt: value.createdAt
    }));
};

export const getInit = async () => {
    const result = await getCount();
    const history = getHistory(result);
    if(history.length <= 0) {
        return {count:0, history: []}
    }
    
    return { count: result[0].value, history };
};