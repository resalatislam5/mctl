// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
// import type { RootState } from '../../app/store';

// export const useHasPermission = (permissionName: string) => {
//   const navigate = useNavigate();
//   const user = useSelector((state: RootState) => state.auth.user);

//   // redirect side-effect
//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     }
//   }, [user, navigate]);

//   // skip query if no user
//   //   const {
//   //     data: permissions = [],
//   //     isLoading,
//   //     isError,
//   //   } = useGetPermissionsByRoleQuery(user?.role_id!, {
//   //     skip: !user,
//   //   });

//   //   const allowed = permissions.includes(permissionName);

//   return true;
// };
