import { useContext } from "react";
import { AuthContext } from "./Contexts/AuthContext";

function withAuth (Component) {
    return function (props) {
        const {loggedInUser, SetLoggedInUser} = useContext(AuthContext);
        return (
            <Component loggedInUser= {loggedInUser} SetLoggedInUser={SetLoggedInUser} {...props}>
            </Component>
        )
    }
}
export default withAuth;