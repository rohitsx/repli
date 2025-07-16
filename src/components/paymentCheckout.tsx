import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetStartedBtn } from "./getStartedBtn";

export const PaymentCheckout = () => {
  const features = [
    "Receive email summaries",
    "Access to new features",
    "Upcoming features:",
  ];

  const upcoming = [
    "Quick responses from WhatsApp",
    "Personality AI",
    "Autonomous email agent",
  ];

  return (
    <Card className="w-xs md:w-sm my-8">
      <CardHeader className="space-y-3">
        <CardTitle className="text-xl">Pro</CardTitle>
        <CardDescription>
          <span className="font-bold text-5xl">$4</span> /Mo
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3 text-md px-10">
        <ul className="space-y-2 list-disc">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}

          <ul className="pl-6 space-y-2 list-disc">
            {upcoming.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </ul>
      </CardContent>

      <CardFooter className="text-center flex-col space-y-2">
        <GetStartedBtn />
        <p className="text-sm text-muted-foreground">
          Early users get exclusive discounts before price increases
        </p>
      </CardFooter>
    </Card>
  );
};
