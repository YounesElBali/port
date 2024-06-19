import React, { useEffect } from 'react';
import axios from 'axios';

const BatchGenerator = () => {
    const checkAndExecuteMonthlyTask = async () => {
        const lastRun = localStorage.getItem('lastRun');
        const now = new Date();
        
        if (lastRun) {
            const lastRunDate = new Date(lastRun);
            const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(now.getMonth() - 1);
            
            if (lastRunDate < oneMonthAgo) {
                await executeMonthlyTask();
            }
        } else {
            await executeMonthlyTask();
        }
    };

    const executeMonthlyTask = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL +'/api/XMLFile/GetXMLFile');
            if (response.status === 200) {
                localStorage.setItem('lastRun', new Date().toISOString());
                console.log(response.data);
            } else {
                console.error('Failed to execute monthly task');
            }
        } catch (error) {
            console.error('There was an error executing the monthly task!', error);
        }
    };

    useEffect(() => {
        const interval = setInterval(checkAndExecuteMonthlyTask, 24 * 60 * 60 * 1000); // Check daily
        checkAndExecuteMonthlyTask(); // Also check on initial load

        return () => clearInterval(interval);
    }, []);

    return null; // This component does not render anything
};

export default BatchGenerator;