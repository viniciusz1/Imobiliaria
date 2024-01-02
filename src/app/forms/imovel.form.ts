import { FormGroup, FormControl } from "@angular/forms";

export let ImovelForm = new FormGroup({
    id: new FormControl(''),
    proprietario: new FormControl(''), //Adicionar backend - ok
    corretor: new FormControl(''),
    tipoImovel: new FormControl(''),
    finalidade: new FormControl(''),
    localizacao: new FormGroup({ 
        cep: new FormControl(''),
        logradouro: new FormControl(''),
        numero: new FormControl(''), //Adicionar ao formulário
        complemento: new FormControl(''),
        estado: new FormGroup({ nome: new FormControl('')}),
        cidade: new FormGroup({ nome: new FormControl('')}),
        bairro: new FormGroup({ nome: new FormControl('')}),
        pais: new FormGroup({ nome: new FormControl('')}), // Adicionar ao formulário
    }),
    valor: new FormControl(''),
    iptu: new FormControl(''),
    condominio: new FormControl(''),
    taxas: new FormControl(''),
    observacaoValor: new FormControl(''),
    areaTotal: new FormControl(''),
    medidaAreaTotal: new FormControl(''),
    areaUtil: new FormControl(''),
    medidaAreaUtil: new FormControl(''),
    areaConstruida: new FormControl(''),
    medidaAreaConstruida: new FormControl(''),
    areaTerreno: new FormControl(''),
    medidaAreaTerreno: new FormControl(''),
    terrenoFrente: new FormControl(''),
    medidaTerrenoFrente: new FormControl(''),
    terrenoFundos: new FormControl(''),
    medidaTerrenoFundos: new FormControl(''),
    terrenoEsquerda: new FormControl(''),
    medidaTerrenoEsquerda: new FormControl(''),
    terrenoDireita: new FormControl(''),
    medidaTerrenoDireita: new FormControl(''),
    qtdDormitorios: new FormControl(''),
    qtdSuites: new FormControl(''),
    qtdBanheiros: new FormControl(''),
    qtdGaragens: new FormControl(''),
    qtdSalas: new FormControl(''),
    qtdAcomodacoes: new FormControl(''),
    mobiliado: new FormControl(''),
    pavimento: new FormControl(''), 
    anoConstrucao: new FormControl(''),
    unidade: new FormControl(''),
    numAndar: new FormControl(''),
    permuta: new FormControl(''), 
    caracteristicas: new FormControl(''), //? verificar como realizar
    descricao: new FormControl(''),
    observacao: new FormControl(''),
});