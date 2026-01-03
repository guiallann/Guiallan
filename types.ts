
export interface FormData {
  nome: string;
  email: string;
  empresa: string;
  cargo: string;
  faturamento: string;
  estagio: string;
  ambicao: string;
  desconforto: string;
  desconfortoOutro?: string;
  metricas: string[];
  momento: string;
}

export enum AppStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
