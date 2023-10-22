import { observer } from "mobx-react-lite";
import { useRootStore } from "../../stores/root/use-root-store.hook";

export const MobxTest: React.FC = observer(function MobxTest() {
  const { countStore } = useRootStore();

  return (
    <div>
      <p>You clicked {countStore.count} times</p>
      <button onClick={() => countStore.increment()}>Click me</button>
    </div>
  );
});
