import AuthContext from "contexts/JWTAuthContext";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);

export default useAuth;
