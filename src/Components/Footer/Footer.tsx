import classNames from 'classnames';
import { Filter } from '../../types/Filter';

type Props = {
  activeTodos: AnyARecord;
  setFilter: (currentFilter: Filter) => void;
  currentFilter: Filter;
};

export const Footer: React.FC<Props> = ({
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
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: currentFilter === Filter.All,
          })}
          data-cy="FilterLinkAll"
          onClick={() => {
            if (currentFilter !== Filter.All) {
              setFilter(Filter.All);
            }
          }}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: currentFilter === Filter.Active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => {
            if (currentFilter !== Filter.Active) {
              setFilter(Filter.Active);
            }
          }}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: currentFilter === Filter.Completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => {
            if (currentFilter !== Filter.Completed) {
              setFilter(Filter.Completed);
            }
          }}
        >
          Completed
        </a>
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
