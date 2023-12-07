import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable.
                </p>
            </div>
            <div className="flex flex-wrap justify-between">
                {
                    services.map(services => <ServiceCard
                        key={services._id}
                        services={services}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;