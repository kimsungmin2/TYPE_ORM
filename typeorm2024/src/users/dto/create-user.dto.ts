export class CreateUserDto {
  userId: number;

  email: string;

  name: string;

  password: string;

  Checkpass: string;

  permission: string;

  emailstatus: string;

  emailVerified: boolean;

  verificationToken: string;

  createdAt: Date;

  updatedAt: Date;
}
