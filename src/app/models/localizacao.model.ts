import { Cidade } from "./cidade.model"
import { Pais } from "./pais.model"

export interface Localizacao {
    id?: number
    visibilidade?: boolean
    cep?: number
    rua?: string
    numeroCasa?: number
    complemento?: number
    cidade?: Cidade
    pais?: Pais

}