import { LoadinBtn } from "../btn";
import { Button } from "../ui/button";

export const SaveBtn = ({
  handleSave,
  loading,
}: {
  handleSave: () => void;
  loading: boolean;
}) => {
  const className =
    "w-full bg-whatsapp text-white hover:bg-whatsapp-h hover:text-white cursor-pointer";
  const Btn = () => (
    <Button variant="outline" className={className} onClick={handleSave}>
      Save Changes
    </Button>
  );

  return (
    <div className="w-full flex justify-end ">
      {loading ? <LoadinBtn className={className} /> : <Btn />}
    </div>
  );
};
