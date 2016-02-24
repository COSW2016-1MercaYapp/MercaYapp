/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.cosw.spademo.stub;

import edu.eci.cosw.spademo.tarea.Tarea;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author Felipe Gomez - Oscar Ardila
 */
public interface  IStub {
    public List<Tarea> getTarea();
    public void postTarea(Tarea t);
    
    
    
    
}
