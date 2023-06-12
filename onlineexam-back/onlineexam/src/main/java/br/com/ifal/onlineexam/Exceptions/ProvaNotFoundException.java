package br.com.ifal.onlineexam.Exceptions;

public class ProvaNotFoundException extends RuntimeException {

    public ProvaNotFoundException(Long id){
        super("Não foi possível achar o id " + id);
    }

}
