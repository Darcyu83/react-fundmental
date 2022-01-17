import { T_InputValues } from "../components/gl_reducer_state";
import { useCallback, useState } from "react";

export function useInputs(
  initialForm: T_InputValues
): [T_InputValues, (e: React.FormEvent<HTMLInputElement>) => void, () => void] {
  const [inputValues, setForm] = useState(initialForm);

  const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm((curr) => ({ ...curr, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  console.log(inputValues, onChange, reset);
  return [inputValues, onChange, reset];
}
