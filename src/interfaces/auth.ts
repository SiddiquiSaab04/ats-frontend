export interface Login {
  email: string;
  password: string;
}

export interface LoginLogicProps {
  children: (props: {
    onSubmit: (data: Login) => void;
    isLoading: boolean;
    errorMessage?: string;
  }) => React.ReactElement;
}

export interface Signup {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface SignupLogicProps {
  children: (props: {
    onSubmit: (data: Signup) => void;
    isLoading: boolean;
    errorMessage?: string;
  }) => React.ReactElement;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}