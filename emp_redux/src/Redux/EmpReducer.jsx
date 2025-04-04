import { ADDEMP, DELETEEMP, EDITEMP, VIEWEMP } from "./action"

// let initialState = {
//     employee: [
//         {
//             empid: 1,
//             name: 'Priyanshu',
//             Department: 'IT',
//             hobby: ['Reading', 'Coding'],
//             grnder: 'Male',
//             city: 'Surat'
//         },
//         {
//             empid: 2,
//             name: 'Vishv',
//             Department: 'Account',
//             hobby: ['Reading', 'Coding'],
//             grnder: 'Male',
//             city: 'Vapi'
//         }
//     ]
// }

let initialState = {
    employee: [
        {
            empid: 1,
            name: 'Priyanshu',
            email: 'priyanshu@gmail.com',
            department: 'IT'
        },
        {
            empid: 2,
            name: 'Vishv',
            email: 'vishv@gmail.com',
            department: 'Account',
        }
    ]
}

const EmpReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDEMP:
            return { ...state, employee: [...state.employee, action.payload] }
        case VIEWEMP:
            return state;
        case DELETEEMP:
            state.employee = state.employee.filter((emp) => emp.empid != action.payload)
            return state;
        case EDITEMP:
            {
                console.log(action.payload)
                state.employee = state.employee.map((emp) => {
                    if (emp.empid == action.payload.empid) {
                        return emp = action.payload
                    }
                    return emp
                })
                return state
            }
        default:
            return state;
    }
}

export default EmpReducer;