import { AuthProvider } from './modules/auth';
import { AppRouter } from './modules/router/AppRouter';

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
