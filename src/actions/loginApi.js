import axios from 'axios';

export const postLogin = form => {
    axios.post('/api/login', form)
        .then((res) => {
            console.log(res);
        });
};

