import { Usuario } from './Usuario';

export type Recurso = {
    id: number;
    descricao: string;
    nomeArquivo: string;
    arquivo: string;
    dataCadastro: string;
    status: number;
    usuarioId: string;
    usuario: Usuario;
}