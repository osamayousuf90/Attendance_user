import instance from "../instance";

export const SignUp = async (body) => {
    const res = await instance.post('/signUp', body);
    return res?.data;
}

export const LoginApi = async (body) => {
    const res = await instance.post('/signin', body);
    return res?.data;
}


export const GettingCheckin = async (body) => {
    const res = await instance.post('/getLastCheckin', body);
    return res?.data;
}


