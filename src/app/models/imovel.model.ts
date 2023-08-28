import { Finalidade } from "../enums/finalidade.enum"
import { Medida } from "../enums/medida.enum"
import { TipoImovel } from "../enums/tipoImovel.enum"
import { Caracteristica } from "./caracteristica.model"
import { Corretor } from "./corretor.model"
import { Localizacao } from "./localizacao.model"

export interface Imovel {
    id?: string
    corretor?: Corretor
    tipoImovel?: TipoImovel
    finalidade?: Finalidade
    localizacao?: Localizacao
    valor?: number
    iptu?: number
    condominio?: number
    taxas?: number
    obervacaoValor?: string
    areaTotal?: number
    medidaAreaTotal?: number
    areaUtil?: number
    medidaAreaUtil?: number
    areaConstruida?: number
    medidaAreaConstruida?: Medida
    qtdDormitorios?: number
    qtdSuites?: number
    qtdBanheiros?: number
    qtdGaragens?: number
    qtdSalas?: number
    qtdAcomodacoes?: number
    mobiliado?: boolean
    anoConstrucao?: number
    numAndar?: number
    caracteristicas?: Caracteristica[]
    descricao?: string
    observacao?: string

}