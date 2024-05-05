import { listData } from "@/lib/dummyData";
import Card from "./Card";

const List = () => {
  return (
    <div className="p-2 max-h-[80vh] overflow-auto">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
