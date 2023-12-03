import { Card, CardHeader, CardTitle } from "src/components/ui/card";
import { Skeleton } from "src/components/ui/skeleton";

export default function LoadingProjectId() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-[20px] w-[100px]" />
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
