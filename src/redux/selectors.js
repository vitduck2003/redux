import { createSelector } from 'reselect'

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;
export const todoRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, priorities) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.length
                    ? todo.name.includes(searchText) && todo.name.includes(todo.priorities)
                    : todo.name.includes(searchText)
            }
            return (
                todo.name.includes(searchText) &&
                (
                    status === 'Completed'
                        ? todo.completed
                        : !todo.completed
                        && (priorities.length ? priorities.includes(todo.priority) : true)
                )
            );
        })
    }
)

