import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('should return true for correct credentials', () => {
    expect(service.login('admin', 'admin')).toBeTrue();
  });

  it('should return false for incorrect credentials', () => {
    expect(service.login('user', 'wrong')).toBeFalse();
  });
});
