import axios from 'axios';

export const requestToServer = async () => {
    return await axios.get('https://catfact.ninja/fact');
}