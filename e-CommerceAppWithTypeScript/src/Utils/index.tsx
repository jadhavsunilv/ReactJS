export const checkUserIsAdmin = (props:any) => {
  const {currentUser} = props;
    if (!currentUser || !Array.isArray(currentUser.userRoles)||currentUser === null) return false;
    const { userRoles } = currentUser;
    if (userRoles.includes('admin')) return true;
    return false;
  }     