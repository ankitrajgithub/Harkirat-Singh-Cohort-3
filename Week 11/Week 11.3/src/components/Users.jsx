import {useSelector, useDispatch} from 'react-redux';
import {fetchUser} from '../redux-toolkit/features/user/userSlice'

export function Users(){
    const dispatch=useDispatch();

    const users=useSelector((state)=>{
        return state.userReducer.users;
    });

    return (
        <>
            <h1>User Details:</h1>
            {users.length>0 && users.map((user,index)=><p key={index}>{user.name}</p>)}
            <button onClick={()=>dispatch(fetchUser())}>Click me!</button>
        </>
    )
}