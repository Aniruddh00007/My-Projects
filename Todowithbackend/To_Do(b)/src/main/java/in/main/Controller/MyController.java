package in.main.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import in.main.Services.ToDoService;
import in.main.beans.ToDo;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // React ke liye
@RequestMapping("/todos")
public class MyController {

    @Autowired
    private ToDoService todoservice;

    // Add todo
    @PostMapping
    public ToDo addToDo(@RequestBody ToDo tod) {
        return todoservice.addToDo(tod);
    }

    // Get all todos
    @GetMapping
    public List<ToDo> getAllToDo() {
        return todoservice.getAllToDo();
    }

    // Get single todo by id
    @GetMapping("/{id}")
    public ToDo getTodo(@PathVariable Long id) {
        return todoservice.getToDoDetails(id);
    }

    // Update todo
    @PutMapping("/{id}")
    public ToDo updateToDo(@PathVariable Long id, @RequestBody ToDo tod) {
        tod.setId(id); // ensure id is set
        return todoservice.updateToDo(tod);
    }

    // Delete todo
    @DeleteMapping("/{id}")
    public String deleteToDo(@PathVariable Long id) {
        todoservice.deleteToDo(id);
        return "Todo deleted successfully!";
    }
}
