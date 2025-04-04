export const ADDEMP = 'ADDEMP';
export const VIEWEMP = 'VIEWEMP';
export const DELETEEMP = 'DELETEEMP';
export const EDITEMP = 'EDITEMP';

export const addEmp = (emp)=>(
    {
        type: ADDEMP,
        payload : emp
    }
);

export const viewEmp = ()=>(
    {
        type: ADDEMP,
    }
);

export const deleteEmp = (id)=>(
    {
        type: DELETEEMP,
        payload:id
    }
);

export const editEmp = (emp)=>(
    {
        type: EDITEMP,
        payload:emp
    }
);