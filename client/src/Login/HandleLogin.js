const HandleapiLogin = async (formData) => {
    console.log("the data is",formData)
    const response = await fetch('your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }
  
    return response.json();
  };
  
  export default HandleapiLogin;
  