package br.com.ifal.onlineexam.Exceptions;

public class TurmaNotFoundException extends RuntimeException {

    public TurmaNotFoundException(Long id){
        super("Não foi possível achar o id " + id);
    }

}