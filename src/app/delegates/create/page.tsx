import DelegateStatementForm from "@/components/DelegateStatement/DelegateStatementForm";

export default async function Page() {
  return (
    <>
      {/* TODO: decide style of this h1 and of h1 from delegate/edit page */}
      <h1>Create Delegate Statement</h1>
      <DelegateStatementForm />
    </>
  );
}