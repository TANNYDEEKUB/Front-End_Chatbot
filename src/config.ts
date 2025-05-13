const config = {
  api_path: import.meta.env.VITE_API_BASE_URL, // ✅ ต้องใช้ prefix VITE_
  token_name: 'token',
  headers: () => {
    const token = localStorage.getItem('token');
    return {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    };
  },
};

export default config;
