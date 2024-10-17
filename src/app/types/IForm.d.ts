export namespace Iform {
  interface Login {
    email: string;
    password: string;
  }
  interface signin extends Login {
    name: string;
    sdt: string;
    role: string;
  }
}
