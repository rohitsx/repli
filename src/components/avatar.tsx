import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AvatarUi = ({
  img,
  fallback,
  className,
}: {
  img: string;
  fallback: string;
  className?: string;
}) => {
  return (
    <Avatar className={`cursor-pointer ${className}`}>
      <AvatarImage src={img} />
      <AvatarFallback className="bg-whatsapp text-white">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
};
