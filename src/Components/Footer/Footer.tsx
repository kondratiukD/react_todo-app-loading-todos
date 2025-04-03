import classNames from 'classnames';
import { Filter } from '../../types/Filter';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  activeTodos: number;
  setFilter: (filter: Filter) => void;
  currentFilter: Filter;
};

export const Footer: React.FC<Props> = ({
  todos,
  activeTodos,
  setFilter,
  currentFilter,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodos} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        {Object.values(Filter).map(f => (
          <a
            key={f}
            href={`#/${f.toLowerCase()}`}
            className={classNames('filter__link', {
              selected: currentFilter === f,
            })}
            data-cy={`FilterLink${f}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </a>
        ))}
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!todos.some(todo => todo.completed)}
      >
        Clear completed
      </button>
    </footer>
  );
};
