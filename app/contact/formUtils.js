export const handleInputChange = (e, setFormData) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  export const handleSubmit = async (e, formData, setLoading, setVisible, setFormSubmitted, setFormData, initialFormData, apiKey) => {
    e.preventDefault();
    setLoading(true);
  
    const requiredFields = ["Name", "Email", "Message"];
    const missingFields = requiredFields.filter((field) => !formData[field]);
  
    if (missingFields.length > 0) {
      alert(`Please fill in the required fields: ${missingFields.join(", ")}`);
      setLoading(false);
      return;
    }
  
    const requestOptions = {
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
  