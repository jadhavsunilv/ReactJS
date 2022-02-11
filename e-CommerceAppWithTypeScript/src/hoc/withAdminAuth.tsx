import { useAdminAuth } from './../customHooks';

const WithAdminAuth = (props:any) => useAdminAuth(props) && props.children;

export default WithAdminAuth;