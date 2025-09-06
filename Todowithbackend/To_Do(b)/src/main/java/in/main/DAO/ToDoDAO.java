package in.main.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import in.main.beans.ToDo;

public interface ToDoDAO extends JpaRepository<ToDo, Long>{

}
