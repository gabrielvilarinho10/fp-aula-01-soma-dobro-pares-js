package br.com.seuprojeto.imutabilidade;

public class TesteImutabilidade {
    public static void main(String[] args) {

        Cidade cidadeMutavel = new Cidade("São Paulo");
        PessoaRecordShallow pessoaShallow = new PessoaRecordShallow("João", cidadeMutavel);
        System.out.println("Antes: " + pessoaShallow);
        cidadeMutavel.setNome("Rio de Janeiro");
        System.out.println("Depois (Shallow): " + pessoaShallow);

        CidadeRecord cidadeImutavel = new CidadeRecord("Curitiba");
        PessoaRecord pessoaDeep = new PessoaRecord("Maria", cidadeImutavel);
        System.out.println("Pessoa Deep: " + pessoaDeep);
    }
}
