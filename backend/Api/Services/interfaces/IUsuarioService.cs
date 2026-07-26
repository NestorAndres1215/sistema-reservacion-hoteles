using Api.Dtos;
using Api.Entities;

namespace Api.Services.interfaces
{
    public interface IUsuarioService
    {
        Task<Usuario> GetByIdAsync(int id);
        Task<PagedResult<UsuarioReponse>> GetAllAsync(int page, int pageSize, string? search, string? estado, string? rol);
        Task<Usuario> GetByEmailAsync(string email);
        Task<Usuario> UpdateAsync(int id, UsuarioRequest user);
        Task<Usuario> UpdateEstadoAsync(int id);
    }

}
