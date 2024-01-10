import DelegateStatementInputGroup from "./DelegateStatementInputGroup";
import DelegateStatementBoolSelector from "./DelegateStatementBoolSelector";
import { DelegateStatementFormValues } from "./DelegateStatementForm";
import { UseFormReturn } from "react-hook-form";

export default function OtherInfoFormSection({
  form,
}: {
  form: UseFormReturn<DelegateStatementFormValues>;
}) {
  return (
    <div className="py-8 px-6 border-b border-gray-300">
      <h3 className="font-bold">Other info</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <DelegateStatementInputGroup
          title="Twitter"
          placeholder="@yourname"
          name="twitter"
          form={form}
        />
        <DelegateStatementInputGroup
          title="Discord"
          placeholder="yourname#2142"
          name="discord"
          form={form}
        />
        <DelegateStatementInputGroup
          title="Email (will not be public)"
          placeholder="you@gmail.com"
          name="email"
          form={form}
        />
        <DelegateStatementBoolSelector form={form} />
      </div>
    </div>
  );
}