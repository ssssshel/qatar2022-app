export interface IGenericExternalServiceResponse {
  status: string,
  message: string,
  data: any,
  token: string

  success: boolean,
  error: boolean,
}

export interface ServerSideProps {
  data: any;
  success: boolean;
  error: boolean;
  message?: string;
  reload?: boolean
}