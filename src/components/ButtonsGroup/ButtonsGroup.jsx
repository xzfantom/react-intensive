import { Button } from "../Button/Button";
import useModal from "../Modal/useModal";
import Filter from "../TodoFilter";
import Modal from "../Modal";
import TodoEditor from "../TodoEditor";
import styles from "./ButtonGroup.module.css";

const ButtonsGroup = () => {
  const { toggle, isShowing } = useModal();

  return (
    <div className={styles.buttongroup}>
      <Button onClick={toggle} aria-label="Add todo">
        Add todo
      </Button>

      <Filter />
      <Modal isShowing={isShowing} hide={toggle}>
        <TodoEditor onSave={toggle} />
      </Modal>
    </div>
  );
};

export default ButtonsGroup;
