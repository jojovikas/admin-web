class AuthSession {
  private accessToken: string | null = null;

  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(token: string | null) {
    this.accessToken = token;
  }

  clear() {
    this.accessToken = null;
  }
}

export const authSession = new AuthSession();