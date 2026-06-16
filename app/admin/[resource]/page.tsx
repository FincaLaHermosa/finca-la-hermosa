import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceEditor } from "@/components/admin/ResourceEditor";
import { getAdminResource } from "@/lib/admin/resources";

type AdminResourcePageProps = {
  params: Promise<{ resource: string }>;
};

export default async function AdminResourcePage({ params }: AdminResourcePageProps) {
  const { resource: slug } = await params;
  const resource = getAdminResource(slug);

  if (!resource) notFound();

  return (
    <AdminShell>
      <ResourceEditor resource={resource} />
    </AdminShell>
  );
}
