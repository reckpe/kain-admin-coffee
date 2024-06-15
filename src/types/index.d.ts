type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

type TmenuItem = {
  url: string;
  title: string;
  icon: React.ReactNode;
};

//Users
type TCreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  phone?: string;
  avatar?: string;
};

export { TActiveLinkProps, TmenuItem, TCreateUserParams };
