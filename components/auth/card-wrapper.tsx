import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BackButton } from "./back-button";
import { Social } from "./social";

interface CardWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
  backButtonLabel: string;
  backButtonHref: string;
  social?: boolean;
}

export const CardWrapper = ({
  title,
  description,
  children,
  backButtonLabel,
  backButtonHref,
  social,
}: CardWrapperProps) => {
  return (
    <Card className="w-[450px] flex-col items-center">
      <CardHeader className="gap-[10px]">
        <CardTitle className="text-[25px]">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {social ? (
        <CardFooter>
          <Social />
        </CardFooter>
      ) : null}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
