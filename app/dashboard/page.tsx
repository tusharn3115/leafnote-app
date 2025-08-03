import { CreateNotebookButton } from "@/components/create-notebook-button";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebook } from "@/server/notebook";

export default async function Page() {
  const notebooks = await getNotebook();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>Dashboard</h1>
      <CreateNotebookButton />

      {notebooks.success &&
        notebooks.notebooks?.map((notebook) => (
          <div key={notebook.id}>{notebook.name}</div>
        ))}

      {notebooks.success && notebooks?.notebooks?.length === 0 && (
        <div>No notebooks found.</div>
      )}
    </PageWrapper>
  );
}