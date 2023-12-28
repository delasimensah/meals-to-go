import { FC, ReactNode } from "react";
import { List } from "react-native-paper";
import { Style } from "react-native-paper/lib/typescript/components/List/utils";

type ListItemProps = {
  title: string;
  description?: string;
  left: (props: { color: string; style: Style }) => ReactNode;
  onPress: () => void;
};

const ListItem: FC<ListItemProps> = ({ title, description, left, onPress }) => {
  return (
    <List.Item
      title={title}
      description={description}
      left={left}
      onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        marginBottom: 10,
      }}
    />
  );
};

export default ListItem;
