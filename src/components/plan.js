import { useEffect, useState } from 'react';

export const usePlan = (chosenPlan) => {
    const [plan, setPlan] = useState('standard');

    const setLocally = chosenPlan => {
        window.localStorage.setItem('plan', chosenPlan);
        setPlan(chosenPlan);
    };

    const planToggler = (chosenPlan) => {
        plan === chosenPlan ? setLocally({}) : setLocally(chosenPlan);
    };

    useEffect(() => {
        const localPlan = window.localStorage.getItem('plan');
        localPlan && setPlan(localPlan)
    }, []);
    return [plan, planToggler]
};
