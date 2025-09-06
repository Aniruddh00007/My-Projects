package in.main.Services;
import java.util.List;

import in.main.beans.ToDo;
public interface ToDoService {

	
	public ToDo addToDo(ToDo td);
	public List<ToDo> getAllToDo();
	public ToDo getToDoDetails(Long id);
	public ToDo updateToDo(ToDo td);
	public ToDo deleteToDo(Long id);
	
	
}
