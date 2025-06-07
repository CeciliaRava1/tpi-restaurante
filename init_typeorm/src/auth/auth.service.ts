import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // Para este ejemplo, un usuario fijo "admin" con password "admin"
  private readonly users = [
    {
      userId: 1,
      username: 'admin',
      password: 'admin',
    },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = this.users.find(
      (user) => user.username === username && user.password === pass,
    );
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
