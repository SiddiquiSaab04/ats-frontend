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