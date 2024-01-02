import { FormGroup, FormControl } from "@angular/forms";

export let PessoaForm = new FormGroup({
    perfilCadastro: new FormGroup({
        tipoCadastro: new FormControl(),
        observacaoTipoCadastro: new FormControl(),
        status: new FormControl(),
        clienteDesde: new FormControl(),
        codReferencia: new FormControl(),
        cresci: new FormControl(),
        origemCaptacao: new FormControl(),
        corretorResponsavel: new FormControl(),
    }),
    cadastro: new FormGroup({
        tipoPessoa: new FormControl(),
        nomeResponsavel: new FormControl(),
        dataNascimento: new FormControl(),
        profissao: new FormControl(),
        cpf: new FormControl(),
    }),
    perfilBusca: new FormGroup({
        tipoImovel: new FormControl(),
        negociacao: new FormControl(),
        valorMinimo: new FormControl(),
        valorMaximo: new FormControl(),
        opcoesDormitorios: new FormControl(),
        numeroDocmitorios: new FormControl(),
    }),
    contato: new FormGroup({
        celular: new FormControl(),
        telefoneResidencial: new FormControl(),
        telefoneComercial: new FormControl(),
        email: new FormControl(),
    }),
    endereco: new FormGroup({
        cep: new FormControl(),
        logradouro: new FormControl(),
        numero: new FormControl(),
        complemento: new FormControl(),
        bairro: new FormControl(),
        estado: new FormControl(),
        cidade: new FormControl(),
    }),
    informacoesComplementares: new FormGroup({
        foto: new FormControl(),
        outrasInformacoes: new FormControl(),
    })
});