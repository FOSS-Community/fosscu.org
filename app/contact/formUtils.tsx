import { Dispatch, SetStateAction, FormEvent, ChangeEvent } from "react";

interface FormData {
  Name: string;
  Email: string;
  Message: string;
}

export const handleInputChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFormData: Dispatch<SetStateAction<FormData>>
): void => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const handleSubmit = async (
  e: FormEvent<HTMLFormElement>,
  formData: FormData,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setVisible: Dispatch<SetStateAction<boolean>>,
  setFormSubmitted: Dispatch<SetStateAction<boolean>>,
  setFormData: Dispatch<SetStateAction<FormData>>,
  initialFormData: FormData,
  apiKey: string
): Promise<void> => {
  e.preventDefault();
  setLoading(true);

  const requiredFields: (keyof FormData)[] = ["Name", "Email", "Message"];
  const missingFields = requiredFields.filter((field) => !formData[field]);

  if (missingFields.length > 0) {
    alert(`Please fill in the required fields: ${missingFields.join(", ")}`);
    setLoading(false);
    return;
  }

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      records: [
        {
          fields: { ...formData },
        },
      ],
    }),
  };

  try {
    const response = await fetch(
      "https://api.airtable.com/v0/appt2qGxSivdUxI4b/data",
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    setVisible(false);
    setFormSubmitted(true);
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while submitting the form. Please try again later.");
    setFormData(initialFormData);
  } finally {
    setLoading(false);
  }
};
