using Api.Dtos;
using Api.Entities;
using System.Security.Claims;

namespace Api.Services.interfaces
{
    public interface IAuthService
    {
        Task<Usuario> Register(RegisterUsuarioRequest dto);
        Task<Usuario> RegisterAdmin(RegisterUsuarioRequest dto);
        Task<Usuario> UpdatePassword(int id, PasswordRequest dto);
        Task<AuthResponse> Login(LoginRequest dto);
        Task<UsuarioReponse?> GetCurrentUserFromClaims(ClaimsPrincipal user);

    }

}
