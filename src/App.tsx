import useTodo from '@/hooks/useTodo.ts';
import Layout from '@/templates/Layout.tsx';
import TodoList from '@/templates/TodoList.tsx';
import TodoForm from '@/templates/TodoForm.tsx';
import Statistic from '@/templates/Statistic.tsx';
import Header from '@/templates/Header.tsx';

function App() {
  const {
    models: { todos, values },
    operations: { setValues, setTodos, handleSubmit },
  } = useTodo();

  return (
    <Layout>
      <Header />
      <TodoForm
        values={values}
        setValues={setValues}
        handleSubmit={handleSubmit}
      />
      <Statistic todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Layout>
  );
}

export default App;
