import { observer, useLocalObservable } from "mobx-react-lite";

export const MobxTest: React.FC = observer(function MobxTest() {
  const countStore = useLocalObservable(() => ({
    count: 0,
    increment() {
      this.count++;
    },
  }));

  return (
    <div>
      <p>You clicked {countStore.count} times</p>
      <button onClick={() => countStore.increment()}>Click me</button>
    </div>
  );
});
