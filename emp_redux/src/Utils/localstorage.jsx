export const loadState=()=>{
    try{
        let employee=localStorage.getItem("employee");
        if(employee==null){
            return undefined;
        }
        return JSON.parse(employee);
    }catch(err){
        console.log(err);
        return undefined;
    }
}

export const saveState=(state)=>{
    try{
        localStorage.setItem("employee",JSON.stringify(state))
    }catch(err)
    {
        console.log(err);
        return undefined;
    }
}