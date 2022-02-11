import { useAuth } from './../customHooks';

const WithAuth = (props:any) => useAuth(props) && props.children;

export default (WithAuth);