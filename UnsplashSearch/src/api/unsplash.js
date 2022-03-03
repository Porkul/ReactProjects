import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 40vhcFOSnFMuUDLsVTIVzQOWG82_mLErbta2HYuAOLU' 
    }
});


