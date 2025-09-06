package in.main.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.main.DAO.ToDoDAO;
import in.main.beans.ToDo;

@Service
public class ToDoServiceImplement implements ToDoService {

    @Autowired
    private ToDoDAO tododao;

    @Override
    public ToDo addToDo(ToDo td) {
        return tododao.save(td);
    }

    @Override
    public List<ToDo> getAllToDo() {
        return tododao.findAll();
    }

    @Override
    public ToDo getToDoDetails(Long id) {
        Optional<ToDo> todo = tododao.findById(id);
        return todo.orElse(null); 
        
    }

    @Override
    public ToDo updateToDo(ToDo td) {
        if (td.getId() != null && tododao.existsById(td.getId())) {
            return tododao.save(td); 
        }
        return null; 
    }

    @Override
    public ToDo deleteToDo(Long id) {
        Optional<ToDo> todo = tododao.findById(id);
        if (todo.isPresent()) {
            tododao.deleteById(id);
            return todo.get(); 
        }
        return null;
    }
}
