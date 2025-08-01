import { Logout } from "@/components/logout";
import { PageWrapper } from "@/components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <Logout />
    </PageWrapper>
  );
}
