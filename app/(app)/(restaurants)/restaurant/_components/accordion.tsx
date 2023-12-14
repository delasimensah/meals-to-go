import { FC, Fragment, ReactNode, useState } from "react";
import { List, Divider } from "react-native-paper";

type AccordionProps = {
  children?: ReactNode;
  title: string;
  listItems: string[];
  icon: string;
};

const Accordion: FC<AccordionProps> = ({ title, icon, listItems }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <List.Accordion
      title={title}
      left={(props) => <List.Icon {...props} icon={icon} />}
      expanded={expanded}
      onPress={() => setExpanded(!expanded)}
    >
      {listItems.map((item, idx) => {
        return (
          <Fragment key={idx}>
            <List.Item title={item} />
            {idx !== listItems.length - 1 && <Divider />}
          </Fragment>
        );
      })}
    </List.Accordion>
  );
};

export default Accordion;
