import { useEffect, useState } from 'react';

const useService = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // return service of hospital
    return [services]
};

export default useService;


