namespace Api.Auth.interfaces
{
    public interface IJwtTokenGenerator
    {
        string GenerateToken(int userId, string email, string role);
    }
}
