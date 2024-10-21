import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearchView } from "../utils/searchSlice";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const searchView = useSelector(store => store.search.searchView)
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                // ...
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browse')
            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate('/')
            }
            return () => unsubscribe();
        })
    }, [])
    const handleSearch = () => {
        dispatch(toggleSearchView());
    }
    return (<div className="fixed top-0 left-0 w-48 ml-[9%] mt-2 z-30">
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        <div className="fixed top-7 right-8 z-50 flex ">
            {user && (<> <button style={{ backgroundColor: "rgb(229, 9, 20)" }} className="px-3  z-30 py-1 rounded-sm text-white mx-3" onClick={handleSearch} >         {!searchView ? "Search" : "Go Back"}
            </button>
                <button style={{ backgroundColor: "rgb(229, 9, 20)" }} className=" px-3 z-30 py-1 rounded-sm text-white mx-3" onClick={handleSignOut} > Sign out</button> </>)}
        </div>
    </div>)
}
export default Header;