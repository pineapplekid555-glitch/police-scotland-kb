export type UserRole =
  | 'guest'
  | 'recruit'
  | 'constable'
  | 'sergeant'
  | 'inspector'
  | 'chief_inspector'
  | 'superintendent'
  | 'chief_superintendent'
  | 'admin';

export const roleHierarchy: Record<UserRole, number> = {
  guest: 0,
  recruit: 1,
  constable: 2,
  sergeant: 3,
  inspector: 4,
  chief_inspector: 5,
  superintendent: 6,
  chief_superintendent: 7,
  admin: 8,
};

export const canEditPage = (userRole: UserRole): boolean => {
  return roleHierarchy[userRole] >= roleHierarchy.sergeant;
};

export const canDeletePage = (userRole: UserRole): boolean => {
  return roleHierarchy[userRole] >= roleHierarchy.inspector;
};

export const canAccessAdmin = (userRole: UserRole): boolean => {
  return roleHierarchy[userRole] >= roleHierarchy.inspector;
};
