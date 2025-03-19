import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the HTML page
    window.location.href = '/index.html';
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Перенаправление на презентацию...</h1>
        <p className="text-xl text-gray-600">Пожалуйста, подождите, идет загрузка презентации.</p>
      </div>
    </div>
  );
};

export default Index;